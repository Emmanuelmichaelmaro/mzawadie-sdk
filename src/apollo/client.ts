import {
    ApolloCache,
    ApolloClient,
    ApolloLink,
    createHttpLink,
    FetchResult,
    InMemoryCache,
    NormalizedCacheObject,
    Reference,
} from "@apollo/client";
import fetch from "cross-fetch";
import jwtDecode from "jwt-decode";

import { JWTToken } from "../core";
import { storage } from "../core";
import { TypedTypePolicies } from "./apollo-helpers";
import { AuthSDK } from "./auth";
import { auth } from "./auth";
import { RefreshTokenMutation } from "./types";
import { ApolloConfigOptions } from "./utils";

let client: ApolloClient<NormalizedCacheObject>;
let authClient: AuthSDK;
let refreshPromise: ReturnType<AuthSDK["refreshToken"]> | null = null;

type FetchConfig = Partial<{
    /**
     * Enable auto token refreshing. Default to `true`.
     */
    autoTokenRefresh: boolean;
    /**
     * Set a value for skew between local time and token expiration date in
     * seconds (only together with `autoTokenRefresh`). Defaults to `60`.
     */
    tokenRefreshTimeSkew: number;
    /**
     * Refresh token and retry the request when Mzawadie responds with `Unauthorized` error.
     * Defaults to `true`.
     */
    refreshOnUnauthorized: boolean;
}>;

const getTypePolicies = (autologin: boolean): TypedTypePolicies => ({
    Query: {
        fields: {
            authenticated: {
                read(_, { readField, toReference }): boolean {
                    return !!readField(
                        "id",
                        toReference({
                            __typename: "User",
                        })
                    );
                },
            },
            me: {
                read(_, { toReference, canRead }): Reference | undefined | null {
                    const ref = toReference({
                        __typename: "User",
                    });

                    return canRead(ref) ? ref : null;
                },
            },
            authenticating: {
                read(read = autologin && !!storage.getCSRFToken(), { readField }): boolean {
                    if (readField("authenticated")) {
                        return false;
                    }

                    return read;
                },
            },
        },
    },
    User: {
        /**
         * IMPORTANT
         * This works as long as we have 1 User cache object which is the current logged in User.
         * If the client should ever fetch additional Users, this should be removed
         * and the login methods (token create or verify) should be responsible for writing USER query cache manually.
         */
        keyFields: [],
        fields: {
            addresses: {
                merge: false,
            },
        },
    },
});

export const createFetch =
    ({
        autoTokenRefresh = true,
        tokenRefreshTimeSkew = 120,
        refreshOnUnauthorized = true,
    }: FetchConfig = {}) =>
    async (input: RequestInfo, init: RequestInit): Promise<Response> => {
        if (!client) {
            throw new Error(
                "Could not find Mzawadie's client instance. Did you forget to call createMzawadieClient()?"
            );
        }

        let token = storage.getAccessToken();

        if (JSON.parse(init.body?.toString() || "")?.operationName === "refreshToken") {
            return fetch(input, init);
        }

        if (autoTokenRefresh && token) {
            // auto refresh token before provided time skew (in seconds) until it expires
            const expirationTime = (jwtDecode<JWTToken>(token).exp - tokenRefreshTimeSkew) * 1000;

            try {
                if (refreshPromise) {
                    await refreshPromise;
                } else if (Date.now() >= expirationTime) {
                    // refreshToken automatically updates token in storage
                    refreshPromise = authClient.refreshToken();

                    await refreshPromise;
                }
            } catch (e) {
            } finally {
                refreshPromise = null;
            }
            token = storage.getAccessToken();
        }

        if (token) {
            init.headers = {
                ...init.headers,
                "authorization-bearer": token,
            };
        }

        if (refreshOnUnauthorized && token) {
            const response = await fetch(input, init);
            const data: FetchResult = await response.clone().json();
            const isUnauthenticated = data?.errors?.some(
                (error) => error.extensions?.exception.code === "ExpiredSignatureError"
            );
            let refreshTokenResponse: FetchResult<
                RefreshTokenMutation,
                Record<string, any>,
                Record<string, any>
            >;

            if (isUnauthenticated) {
                try {
                    if (refreshPromise) {
                        refreshTokenResponse = await refreshPromise;
                    } else {
                        refreshPromise = authClient.refreshToken();

                        refreshTokenResponse = await refreshPromise;
                    }

                    if (refreshTokenResponse.data?.tokenRefresh?.token) {
                        // check if mutation returns a valid token after refresh and retry the request
                        return createFetch({
                            autoTokenRefresh: false,
                            refreshOnUnauthorized: false,
                        })(input, init);
                    } else {
                        // after Mzawadie returns ExpiredSignatureError status and token refresh fails
                        // we log out the user and return the failed response
                        await authClient.logout();
                    }
                } catch (e) {
                } finally {
                    refreshPromise = null;
                }
            }

            return response;
        }

        return fetch(input, init);
    };

export const createApolloClient1 = (
    apiUrl: string,
    autologin: boolean
): ApolloClient<NormalizedCacheObject> => {
    const httpLink = createHttpLink({
        fetch: createFetch(),
        uri: apiUrl,
        credentials: "include",
    });

    const cache = new InMemoryCache({
        typePolicies: getTypePolicies(autologin),
    });

    client = new ApolloClient({
        cache,
        link: httpLink,
    });

    /**
     * Refreshing token code should stay under apollo/auth.ts To get this method available,
     * we need to call "auth()" here. refreshToken mutation doesn't require channel, so it
     * doesn't have to be populated with value.
     */
    authClient = auth({ apolloClient: client, channel: "" });

    return client;
};

/**
 * Creates Apollo client.
 * @param cache Cache used by created Apollo client.
 * @param links Links used by created Apollo client.
 * @param options Rest options, which might be passed to Apollo client.
 */
export function createApolloClient2(
    cache: ApolloCache<any>,
    links: ApolloLink[],
    options?: ApolloConfigOptions
) {
    return new ApolloClient({
        ...options,
        cache,
        link: ApolloLink.from(links),
    });
}

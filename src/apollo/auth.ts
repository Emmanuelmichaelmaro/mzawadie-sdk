// @ts-nocheck
import { ApolloQueryResult, FetchResult } from "@apollo/client";

import {
    ChangeUserPasswordOpts,
    ExternalAuthOpts,
    LoginOpts,
    MzawadieClientMethodsProps,
    RegisterOpts,
    RequestPasswordResetOpts,
    SetPasswordOpts,
    storage,
} from "../core";
import {
    externalAuthenticationUrlMutation,
    externalLogoutMutation,
    externalRefreshMutation,
    externalVerificationTokenMutation,
    obtainExternalAccessTokenMutation,
    tokenAuthMutation,
    tokenRefreshMutation,
    tokenRefreshWithUserMutation,
    tokenVeryficationMutation,
} from "./mutations/auth";
import {
    changeUserPasswordMutation,
    registerAccountMutation,
    resetPasswordRequestMutation,
    setPasswordMutation,
} from "./mutations/user";
import { getUserDetailsQuery } from "./queries/user";
import {
    ExternalAuthenticationUrlMutation,
    ExternalAuthenticationUrlMutationVariables,
    ExternalLogoutMutation,
    ExternalLogoutMutationVariables,
    ExternalObtainAccessTokensMutation,
    ExternalObtainAccessTokensMutationVariables,
    ExternalRefreshMutation,
    ExternalRefreshMutationVariables,
    ExternalVerifyMutation,
    ExternalVerifyMutationVariables,
    PasswordChangeMutation,
    PasswordChangeMutationVariables,
    RefreshTokenMutation,
    RefreshTokenMutationVariables,
    RefreshTokenWithUserMutation,
    RefreshTokenWithUserMutationVariables,
    RegisterAccountMutation,
    RegisterAccountMutationVariables,
    ResetPasswordRequestMutation,
    ResetPasswordRequestMutationVariables,
    SetPasswordMutation,
    SetPasswordMutationVariables,
    TokenAuthMutation,
    TokenAuthMutationVariables,
    VerifyTokenMutation,
    VerifyTokenMutationVariables,
} from "./types";

export interface AuthSDK {
    changePassword: (opts: ChangeUserPasswordOpts) => Promise<FetchResult<PasswordChangeMutation>>;
    login: (opts: LoginOpts) => Promise<FetchResult<TokenAuthMutation>>;
    logout: () => Promise<ApolloQueryResult<null>[] | null>;
    refreshToken: (includeUser?: boolean) => Promise<FetchResult<RefreshTokenMutation>>;
    register: (opts: RegisterOpts) => Promise<FetchResult<RegisterAccountMutation>>;
    requestPasswordReset: (
        opts: RequestPasswordResetOpts
    ) => Promise<FetchResult<ResetPasswordRequestMutation>>;
    setPassword: (opts: SetPasswordOpts) => Promise<FetchResult<SetPasswordMutation>>;
    verifyToken: () => Promise<FetchResult<VerifyTokenMutation>>;
    getExternalAuthUrl: (
        opts: ExternalAuthOpts
    ) => Promise<FetchResult<ExternalAuthenticationUrlMutation>>;
    getExternalAccessToken: (
        opts: ExternalAuthOpts
    ) => Promise<FetchResult<ExternalObtainAccessTokensMutation>>;
    logoutExternal: (opts: ExternalAuthOpts) => Promise<FetchResult<ExternalLogoutMutation>>;
    refreshExternalToken: (opts: ExternalAuthOpts) => Promise<FetchResult<ExternalRefreshMutation>>;
    verifyExternalToken: (opts: ExternalAuthOpts) => Promise<FetchResult<ExternalVerifyMutation>>;
}

export const auth = ({ apolloClient: client, channel }: MzawadieClientMethodsProps): AuthSDK => {
    /**
     * Authenticates user with email and password.
     *
     * @param opts - Object with user's email and password.
     * @returns Promise resolved with CreateToken type data.
     */
    const login: AuthSDK["login"] = (opts) => {
        client.writeQuery({
            query: getUserDetailsQuery,
            data: {
                authenticating: true,
            },
        });

        return client.mutate<TokenAuthMutation, TokenAuthMutationVariables>({
            mutation: tokenAuthMutation,
            variables: {
                ...opts,
            },
            update: (_, { data }) => {
                if (data?.tokenCreate?.token) {
                    storage.setTokens({
                        accessToken: data?.tokenCreate.token,
                        csrfToken: data?.tokenCreate.csrfToken!,
                    });
                }
            },
        });
    };

    /**
     * Clears stored token and Apollo store.
     *
     * @returns Apollo's native resetStore method.
     */
    const logout: AuthSDK["logout"] = () => {
        storage.clear();

        client.writeQuery({
            query: getUserDetailsQuery,
            data: {
                authenticating: false,
            },
        });

        return client.resetStore();
    };

    /**
     * Registers user with email and password.
     *
     * @param opts - Object with user's data. Email and password are required fields.
     * "channel" can be changed by using first "setChannel" method from api.
     * @returns Promise resolved with AccountRegister type data.
     */
    const register: AuthSDK["register"] = async (opts) =>
        await client.mutate<RegisterAccountMutation, RegisterAccountMutationVariables>({
            mutation: registerAccountMutation,
            variables: {
                input: {
                    ...opts,
                    channel,
                },
            },
        });

    /**
     * Refresh JWT token. Mutation will try to take refreshToken from the function's arguments.
     * If it fails, it will try to use refreshToken from the http-only cookie called refreshToken.
     *
     * @param opts - Optional object with csrfToken and refreshToken. csrfToken is required when refreshToken is provided as a cookie.
     * @returns Authorization token.
     */
    const refreshToken: AuthSDK["refreshToken"] = (includeUser = false) => {
        const csrfToken = storage.getCSRFToken();

        if (!csrfToken) {
            throw Error("csrfToken not present");
        }

        if (includeUser) {
            return client.mutate<RefreshTokenWithUserMutation, RefreshTokenWithUserMutationVariables>({
                mutation: tokenRefreshWithUserMutation,
                variables: {
                    csrfToken,
                },
                update: (_, { data }) => {
                    if (data?.tokenRefresh?.token) {
                        storage.setAccessToken(data?.tokenRefresh.token);
                    } else {
                        logout();
                    }
                },
            });
        } else {
            return client.mutate<RefreshTokenMutation, RefreshTokenMutationVariables>({
                mutation: tokenRefreshMutation,
                variables: {
                    csrfToken,
                },
                update: (_, { data }) => {
                    if (data?.tokenRefresh?.token) {
                        storage.setAccessToken(data?.tokenRefresh.token);
                    } else {
                        logout();
                    }
                },
            });
        }
    };

    /**
     * Verify JWT token.
     *
     * @param token - Token value.
     * @returns User assigned to token and the information if the token is valid or not.
     */
    const verifyToken: AuthSDK["verifyToken"] = async () => {
        const token = storage.getAccessToken();

        if (!token) {
            throw Error("Token not present");
        }

        const result = await client.mutate<VerifyTokenMutation, VerifyTokenMutationVariables>({
            mutation: tokenVeryficationMutation,
            variables: { token },
        });

        if (!result.data?.tokenVerify?.isValid) {
            await logout();
        }

        return result;
    };

    /**
     * Change the password of the logged in user.
     *
     * @param opts - Object with password and new password.
     * @returns Errors if the password change has failed.
     */
    const changePassword: AuthSDK["changePassword"] = async (opts) => {
        return await client.mutate<PasswordChangeMutation, PasswordChangeMutationVariables>({
            mutation: changeUserPasswordMutation,
            variables: { ...opts },
        });
    };

    /**
     * Sends an email with the account password modification link.
     *
     * @param opts - Object with slug of a channel which will be used for notify user,
     * email of the user that will be used for password recovery and URL of a view
     * where users should be redirected to reset the password. URL in RFC 1808 format.
     *
     * @returns Errors if there were some.
     */
    const requestPasswordReset: AuthSDK["requestPasswordReset"] = async (opts) => {
        return await client.mutate<ResetPasswordRequestMutation, ResetPasswordRequestMutationVariables>(
            {
                mutation: resetPasswordRequestMutation,
                variables: { ...opts },
            }
        );
    };

    /**
     * Sets the user's password from the token sent by email.
     *
     * @param opts - Object with user's email, password and one-time token required to set the password.
     * @returns User instance, JWT token, JWT refresh token and CSRF token.
     */
    const setPassword: AuthSDK["setPassword"] = (opts) => {
        return client.mutate<SetPasswordMutation, SetPasswordMutationVariables>({
            mutation: setPasswordMutation,
            variables: { ...opts },
            update: (_, { data }) => {
                if (data?.setPassword?.token) {
                    storage.setTokens({
                        accessToken: data?.setPassword.token,
                        csrfToken: data?.setPassword.csrfToken || null,
                    });
                }
            },
        });
    };

    /**
     * Executing externalAuthenticationUrl mutation will prepare special URL which will redirect user to requested
     * page after successful authentication. After redirection state and code fields will be added to the URL.
     *
     * @param opts - Object with pluginId default value set as "mirumee.authentication.openidconnect" and input as
     * JSON with redirectUrl - the URL where the user should be redirected after successful authentication.
     * @returns Authentication data and errors
     */
    const getExternalAuthUrl: AuthSDK["getExternalAuthUrl"] = async (opts) => {
        return await client.mutate<
            ExternalAuthenticationUrlMutation,
            ExternalAuthenticationUrlMutationVariables
        >({
            mutation: externalAuthenticationUrlMutation,
            variables: { ...opts },
        });
    };

    /**
     * The externalObtainAccessTokens mutation will generate requested access tokens.
     *
     * @param opts - Object with pluginId default value set as "mirumee.authentication.openidconnect" and input as
     * JSON with code - the authorization code received from the OAuth provider and state - the state value received
     * from the OAuth provider
     * @returns Login authentication data and errors
     */
    const getExternalAccessToken: AuthSDK["getExternalAccessToken"] = (opts) => {
        return client.mutate<
            ExternalObtainAccessTokensMutation,
            ExternalObtainAccessTokensMutationVariables
        >({
            mutation: obtainExternalAccessTokenMutation,
            variables: { ...opts },
            update: (_, { data }) => {
                if (data?.externalObtainAccessTokens?.token) {
                    storage.setTokens({
                        accessToken: data?.externalObtainAccessTokens.token,
                        csrfToken: data?.externalObtainAccessTokens.csrfToken || null,
                    });
                }
            },
        });
    };

    /**
     * The mutation will prepare the logout URL. All values passed in field input will be added as GET parameters to the logout request.
     *
     * @param opts - Object with pluginId default value set as "mirumee.authentication.openidconnect" and input as
     * JSON with returnTo - the URL where a user should be redirected
     * @returns Logout data and errors
     */
    const logoutExternal: AuthSDK["logoutExternal"] = async (opts) => {
        await logout();

        return await client.mutate<ExternalLogoutMutation, ExternalLogoutMutationVariables>({
            mutation: externalLogoutMutation,
            variables: { ...opts },
        });
    };

    /**
     * The externalRefresh mutation will generate new access tokens when provided with a valid refresh token.
     * If the refresh token is not provided as an argument, the plugin will try to read it from a cookie
     * set by the tokenCreate mutation. In that case, a matching CSRF token is required.
     *
     * @param opts - Object with pluginId default value set as "mirumee.authentication.openidconnect" and input as
     * JSON with refreshToken - the refresh token which should be used to refresh the access token and
     * csrfToken - required when refreshToken is not provided as an input
     * @returns Token refresh data and errors
     */
    const refreshExternalToken: AuthSDK["refreshExternalToken"] = (opts) => {
        return client.mutate<ExternalRefreshMutation, ExternalRefreshMutationVariables>({
            mutation: externalRefreshMutation,
            variables: { ...opts },
            update: (_, { data }) => {
                if (data?.externalRefresh?.token) {
                    storage.setAccessToken(data?.externalRefresh.token);
                }
            },
        });
    };

    /**
     * The mutation will verify the authentication token.
     *
     * @param opts - Object with pluginId default value set as "mirumee.authentication.openidconnect" and input as
     * JSON with refreshToken - the refresh token which should be used to refresh the access token and
     * csrfToken - required when refreshToken is not provided as an input
     * @returns Token verification data and errors
     */
    const verifyExternalToken: AuthSDK["verifyExternalToken"] = async (opts) => {
        const result = await client.mutate<ExternalVerifyMutation, ExternalVerifyMutationVariables>({
            mutation: externalVerificationTokenMutation,
            variables: { ...opts },
        });

        if (!result.data?.externalVerify?.isValid) {
            storage.clear();
        }

        return result;
    };

    return {
        changePassword,
        getExternalAccessToken,
        getExternalAuthUrl,
        login,
        logout,
        logoutExternal,
        refreshExternalToken,
        refreshToken,
        register,
        requestPasswordReset,
        setPassword,
        verifyExternalToken,
        verifyToken,
    };
};

import { ApolloLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ErrorResponse, onError } from "@apollo/link-error";
import { GraphQLError } from "graphql";

import { findValueInEnum } from "../apollo";

export enum JWTError {
    invalid = "InvalidTokenError",
    invalidSignature = "InvalidSignatureError",
    expired = "ExpiredSignatureError",
}

export function isJwtError(error: GraphQLError): boolean {
    let jwtError: boolean;
    try {
        // @ts-ignore
        jwtError = !!findValueInEnum(error.extensions?.exception.code, JWTError);
    } catch (e) {
        jwtError = false;
    }

    return jwtError;
}

export function getAuthToken(): string | null {
    try {
        return localStorage.getItem("token");
    } catch {
        return null;
    }
}

export function setAuthToken(token: string) {
    localStorage.setItem("token", token);
    const authEvent = new Event("auth");
    dispatchEvent(authEvent);
}

interface ResponseError extends ErrorResponse {
    networkError?: Error & {
        statusCode?: number;
        bodyText?: string;
    };
}

// possibly remove callback here and use event emitter
export const invalidTokenLinkWithTokenHandler = (tokenExpirationCallback: () => void): ApolloLink => {
    return onError((error: ResponseError) => {
        const isTokenExpired = error.graphQLErrors?.some(isJwtError);

        if (isTokenExpired || (error.networkError && error.networkError.statusCode === 401)) {
            tokenExpirationCallback();
        }
    });
};

export const authLink = setContext((_, context) => {
    const authToken = getAuthToken();

    if (authToken) {
        return {
            ...context,
            headers: {
                ...context.headers,
                Authorization: authToken ? `JWT ${authToken}` : null,
            },
        };
    }
    return context;
});

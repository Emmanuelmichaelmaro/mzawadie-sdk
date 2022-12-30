import { gql } from "@apollo/client";

import { userFragment } from "../fragments/auth";
import { accountErrorFragment } from "../fragments/errors";

export const tokenAuthMutation = gql`
    ${accountErrorFragment}
    mutation TokenAuth($email: String!, $password: String!) {
        tokenCreate(email: $email, password: $password) {
            csrfToken
            refreshToken
            token
            errors: accountErrors {
                ...AccountError
            }
            user {
                id
            }
        }
    }
`;

export const tokenVeryficationMutation = gql`
    ${accountErrorFragment}
    mutation VerifyToken($token: String!) {
        tokenVerify(token: $token) {
            isValid
            payload
            user {
                id
            }
            errors: accountErrors {
                ...AccountError
            }
        }
    }
`;

export const tokenRefreshMutation = gql`
    ${accountErrorFragment}
    mutation RefreshToken($csrfToken: String, $refreshToken: String) {
        tokenRefresh(csrfToken: $csrfToken, refreshToken: $refreshToken) {
            token
            user {
                id
            }
            errors: accountErrors {
                ...AccountError
            }
        }
    }
`;

// separate mutation so the request payload is minimal when user is not needed
// used for initial authentication
export const tokenRefreshWithUserMutation = gql`
    ${accountErrorFragment}
    ${userFragment}
    mutation refreshTokenWithUser($csrfToken: String!) {
        tokenRefresh(csrfToken: $csrfToken) {
            token
            user {
                ...User
            }
            errors {
                ...AccountError
            }
        }
    }
`;

export const externalVerificationTokenMutation = gql`
    ${accountErrorFragment}
    ${userFragment}
    mutation externalVerify(
        $pluginId: String = "mirumee.authentication.openidconnect"
        $input: JSONString!
    ) {
        externalVerify(pluginId: $pluginId, input: $input) {
            isValid
            verifyData
            user {
                ...User
                userPermissions {
                    code
                    name
                }
            }
            errors {
                ...AccountError
            }
        }
    }
`;

export const externalRefreshMutation = gql`
    ${accountErrorFragment}
    mutation externalRefresh(
        $pluginId: String = "mirumee.authentication.openidconnect"
        $input: JSONString!
    ) {
        externalRefresh(pluginId: $pluginId, input: $input) {
            token
            csrfToken
            errors {
                ...AccountError
            }
        }
    }
`;

export const obtainExternalAccessTokenMutation = gql`
    ${accountErrorFragment}
    ${userFragment}
    mutation externalObtainAccessTokens(
        $pluginId: String = "mirumee.authentication.openidconnect"
        $input: JSONString!
    ) {
        externalObtainAccessTokens(pluginId: $pluginId, input: $input) {
            token
            csrfToken
            user {
                ...User
            }
            errors {
                ...AccountError
            }
        }
    }
`;

export const externalAuthenticationUrlMutation = gql`
    ${accountErrorFragment}
    mutation externalAuthenticationUrl(
        $pluginId: String = "mirumee.authentication.openidconnect"
        $input: JSONString!
    ) {
        externalAuthenticationUrl(pluginId: $pluginId, input: $input) {
            authenticationData
            errors {
                ...AccountError
            }
        }
    }
`;

export const externalLogoutMutation = gql`
    ${accountErrorFragment}
    mutation externalLogout(
        $pluginId: String = "mirumee.authentication.openidconnect"
        $input: JSONString!
    ) {
        externalLogout(pluginId: $pluginId, input: $input) {
            logoutData
            errors {
                ...AccountError
            }
        }
    }
`;

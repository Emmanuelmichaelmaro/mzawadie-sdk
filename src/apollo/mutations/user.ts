import { gql } from "@apollo/client";

import { userFragment } from "../fragments/auth";
import { accountErrorFragment } from "../fragments/errors";

export const changeUserPasswordMutation = gql`
    ${accountErrorFragment}
    mutation PasswordChange($newPassword: String!, $oldPassword: String!) {
        passwordChange(newPassword: $newPassword, oldPassword: $oldPassword) {
            errors: accountErrors {
                ...AccountError
            }
        }
    }
`;

export const resetPasswordRequestMutation = gql`
    mutation ResetPasswordRequest($email: String!, $redirectUrl: String!) {
        requestPasswordReset(email: $email, redirectUrl: $redirectUrl) {
            accountErrors {
                field
                message
                code
            }
        }
    }
`;

export const setPasswordMutation = gql`
    ${userFragment}
    ${accountErrorFragment}
    mutation SetPassword($token: String!, $email: String!, $password: String!) {
        setPassword(token: $token, email: $email, password: $password) {
            errors: accountErrors {
                ...AccountError
            }
            token
            csrfToken
            user {
                ...User
            }
            accountErrors {
                field
                message
                code
            }
        }
    }
`;

export const registerAccountMutation = gql`
    mutation RegisterAccount($email: String!, $password: String!, $redirectUrl: String!) {
        accountRegister(input: { email: $email, password: $password, redirectUrl: $redirectUrl }) {
            accountErrors {
                field
                message
                code
            }
            requiresConfirmation
        }
    }
`;

export const updateAccountMutation = gql`
    ${userFragment}
    ${accountErrorFragment}
    mutation AccountUpdate($input: AccountInput!) {
        accountUpdate(input: $input) {
            errors: accountErrors {
                ...AccountError
            }
            user {
                ...User
            }
        }
    }
`;

export const confirmAccountMutation = gql`
    ${userFragment}
    ${accountErrorFragment}
    mutation accountConfirm($email: String!, $token: String!) {
        confirmAccount(email: $email, token: $token) {
            user {
                ...User
            }
            errors {
                ...AccountError
            }
        }
    }
`;

export const requestAccountDeleteMutation = gql`
    ${accountErrorFragment}
    mutation accountRequestDeletion($channel: String!, $redirectUrl: String!) {
        accountRequestDeletion(channel: $channel, redirectUrl: $redirectUrl) {
            errors {
                ...AccountError
            }
        }
    }
`;

export const deleteAccountMutation = gql`
    ${userFragment}
    ${accountErrorFragment}
    mutation accountDelete($token: String!) {
        accountDelete(token: $token) {
            errors {
                ...AccountError
            }
            user {
                ...User
            }
        }
    }
`;

export const requestEmailChangeMutation = gql`
    ${userFragment}
    ${accountErrorFragment}
    mutation requestEmailChange(
        $channel: String!
        $newEmail: String!
        $password: String!
        $redirectUrl: String!
    ) {
        requestEmailChange(
            channel: $channel
            newEmail: $newEmail
            password: $password
            redirectUrl: $redirectUrl
        ) {
            errors {
                ...AccountError
            }
            user {
                ...User
            }
        }
    }
`;

export const confirmEmailChangeMutation = gql`
    ${userFragment}
    ${accountErrorFragment}
    mutation confirmEmailChange($channel: String!, $token: String!) {
        confirmEmailChange(channel: $channel, token: $token) {
            errors {
                ...AccountError
            }
            user {
                ...User
            }
        }
    }
`;

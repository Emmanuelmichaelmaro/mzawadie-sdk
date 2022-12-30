/* tslint:disable */

/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.
import { AccountErrorCode } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: RefreshToken
// ====================================================

export interface RefreshToken_tokenRefresh_user {
    __typename: "User";
    id: string;
}

export interface RefreshToken_tokenRefresh_errors {
    __typename: "AccountError";
    code: AccountErrorCode;
    field: string | null;
    message: string | null;
}

export interface RefreshToken_tokenRefresh {
    __typename: "RefreshToken";
    token: string | null;
    user: RefreshToken_tokenRefresh_user | null;
    errors: RefreshToken_tokenRefresh_errors[];
}

export interface RefreshToken {
    tokenRefresh: RefreshToken_tokenRefresh | null;
}

export interface RefreshTokenVariables {
    csrfToken?: string | null;
    refreshToken?: string | null;
}

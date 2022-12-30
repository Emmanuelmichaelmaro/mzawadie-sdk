/* tslint:disable */

/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.
import { AccountErrorCode } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: TokenAuth
// ====================================================

export interface TokenAuth_tokenCreate_errors {
    __typename: "AccountError";
    code: AccountErrorCode;
    field: string | null;
    message: string | null;
}

export interface TokenAuth_tokenCreate_user {
    __typename: "User";
    id: string;
}

export interface TokenAuth_tokenCreate {
    __typename: "CreateToken";
    csrfToken: string | null;
    refreshToken: string | null;
    token: string | null;
    errors: TokenAuth_tokenCreate_errors[];
    user: TokenAuth_tokenCreate_user | null;
}

export interface TokenAuth {
    tokenCreate: TokenAuth_tokenCreate | null;
}

export interface TokenAuthVariables {
    email: string;
    password: string;
}

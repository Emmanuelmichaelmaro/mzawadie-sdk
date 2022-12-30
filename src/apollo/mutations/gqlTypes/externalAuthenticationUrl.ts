/* tslint:disable */

/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.
import { AccountErrorCode } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: externalAuthenticationUrl
// ====================================================

export interface externalAuthenticationUrl_externalAuthenticationUrl_errors {
    __typename: "AccountError";
    code: AccountErrorCode;
    field: string | null;
    message: string | null;
}

export interface externalAuthenticationUrl_externalAuthenticationUrl {
    __typename: "ExternalAuthenticationUrl";
    authenticationData: any | null;
    errors: externalAuthenticationUrl_externalAuthenticationUrl_errors[];
}

export interface externalAuthenticationUrl {
    externalAuthenticationUrl: externalAuthenticationUrl_externalAuthenticationUrl | null;
}

export interface externalAuthenticationUrlVariables {
    pluginId?: string | null;
    input: any;
}

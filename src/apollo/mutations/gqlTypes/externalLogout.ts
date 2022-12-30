/* tslint:disable */

/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.
import { AccountErrorCode } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: externalLogout
// ====================================================

export interface externalLogout_externalLogout_errors {
    __typename: "AccountError";
    code: AccountErrorCode;
    field: string | null;
    message: string | null;
}

export interface externalLogout_externalLogout {
    __typename: "ExternalLogout";
    logoutData: any | null;
    errors: externalLogout_externalLogout_errors[];
}

export interface externalLogout {
    externalLogout: externalLogout_externalLogout | null;
}

export interface externalLogoutVariables {
    pluginId?: string | null;
    input: any;
}

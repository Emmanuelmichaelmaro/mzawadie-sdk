/* tslint:disable */

/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.
import { AccountErrorCode } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: externalRefresh
// ====================================================

export interface externalRefresh_externalRefresh_errors {
    __typename: "AccountError";
    code: AccountErrorCode;
    field: string | null;
    message: string | null;
}

export interface externalRefresh_externalRefresh {
    __typename: "ExternalRefresh";
    token: string | null;
    csrfToken: string | null;
    errors: externalRefresh_externalRefresh_errors[];
}

export interface externalRefresh {
    externalRefresh: externalRefresh_externalRefresh | null;
}

export interface externalRefreshVariables {
    pluginId?: string | null;
    input: any;
}

/* tslint:disable */

/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.
import { AccountErrorCode } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: accountRequestDeletion
// ====================================================

export interface accountRequestDeletion_accountRequestDeletion_errors {
    __typename: "AccountError";
    code: AccountErrorCode;
    field: string | null;
    message: string | null;
}

export interface accountRequestDeletion_accountRequestDeletion {
    __typename: "AccountRequestDeletion";
    errors: accountRequestDeletion_accountRequestDeletion_errors[];
}

export interface accountRequestDeletion {
    accountRequestDeletion: accountRequestDeletion_accountRequestDeletion | null;
}

export interface accountRequestDeletionVariables {
    channel: string;
    redirectUrl: string;
}

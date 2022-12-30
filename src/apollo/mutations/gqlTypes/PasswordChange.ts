/* tslint:disable */

/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.
import { AccountErrorCode } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: PasswordChange
// ====================================================

export interface PasswordChange_passwordChange_errors {
    __typename: "AccountError";
    code: AccountErrorCode;
    field: string | null;
    message: string | null;
}

export interface PasswordChange_passwordChange {
    __typename: "PasswordChange";
    errors: PasswordChange_passwordChange_errors[];
}

export interface PasswordChange {
    passwordChange: PasswordChange_passwordChange | null;
}

export interface PasswordChangeVariables {
    newPassword: string;
    oldPassword: string;
}

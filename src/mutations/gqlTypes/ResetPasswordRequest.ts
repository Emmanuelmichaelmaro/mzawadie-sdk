/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


import { AccountErrorCode } from "./../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: ResetPasswordRequest
// ====================================================


export interface ResetPasswordRequest_requestPasswordReset_accountErrors {
  __typename: "AccountError";
  field: string | null;
  message: string | null;
  code: AccountErrorCode;
}

export interface ResetPasswordRequest_requestPasswordReset {
  __typename: "RequestPasswordReset";
  accountErrors: ResetPasswordRequest_requestPasswordReset_accountErrors[];
}

export interface ResetPasswordRequest {
  requestPasswordReset: ResetPasswordRequest_requestPasswordReset | null;
}

export interface ResetPasswordRequestVariables {
  email: string;
  redirectUrl: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


import { AccountErrorCode } from "./../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL fragment: AccountError
// ====================================================


export interface AccountError {
  __typename: "AccountError";
  code: AccountErrorCode;
  field: string | null;
  message: string | null;
}

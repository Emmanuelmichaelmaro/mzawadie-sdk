/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


import { AccountErrorCode } from "./../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: VerifyToken
// ====================================================


export interface VerifyToken_tokenVerify_user {
  __typename: "User";
  id: string;
}

export interface VerifyToken_tokenVerify_errors {
  __typename: "AccountError";
  code: AccountErrorCode;
  field: string | null;
  message: string | null;
}

export interface VerifyToken_tokenVerify {
  __typename: "VerifyToken";
  isValid: boolean;
  payload: any | null;
  user: VerifyToken_tokenVerify_user | null;
  errors: VerifyToken_tokenVerify_errors[];
}

export interface VerifyToken {
  tokenVerify: VerifyToken_tokenVerify | null;
}

export interface VerifyTokenVariables {
  token: string;
}

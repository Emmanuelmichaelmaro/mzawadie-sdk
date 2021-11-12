/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


import { AccountErrorCode } from "./../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: RegisterAccount
// ====================================================


export interface RegisterAccount_accountRegister_accountErrors {
  __typename: "AccountError";
  field: string | null;
  message: string | null;
  code: AccountErrorCode;
}

export interface RegisterAccount_accountRegister {
  __typename: "AccountRegister";
  accountErrors: RegisterAccount_accountRegister_accountErrors[];
  requiresConfirmation: boolean | null;
}

export interface RegisterAccount {
  accountRegister: RegisterAccount_accountRegister | null;
}

export interface RegisterAccountVariables {
  email: string;
  password: string;
  redirectUrl: string;
}

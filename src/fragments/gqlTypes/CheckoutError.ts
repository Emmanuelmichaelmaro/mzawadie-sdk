/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


import { CheckoutErrorCode } from "./../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL fragment: CheckoutError
// ====================================================


export interface CheckoutError {
  __typename: "CheckoutError";
  code: CheckoutErrorCode;
  field: string | null;
  message: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


import { PaymentErrorCode } from "./../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL fragment: PaymentError
// ====================================================


export interface PaymentError {
  __typename: "PaymentError";
  code: PaymentErrorCode;
  field: string | null;
  message: string | null;
}

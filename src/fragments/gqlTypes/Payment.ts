/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL fragment: Payment
// ====================================================


export interface Payment_creditCard {
  __typename: "CreditCard";
  brand: string;
  firstDigits: string | null;
  lastDigits: string;
  expMonth: number | null;
  expYear: number | null;
}

export interface Payment_total {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface Payment {
  __typename: "Payment";
  id: string;
  gateway: string;
  token: string;
  creditCard: Payment_creditCard | null;
  total: Payment_total | null;
}

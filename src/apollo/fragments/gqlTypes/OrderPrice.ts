/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: OrderPrice
// ====================================================

export interface OrderPrice_gross {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface OrderPrice_net {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface OrderPrice {
    __typename: "TaxedMoney";
    gross: OrderPrice_gross;
    net: OrderPrice_net;
}

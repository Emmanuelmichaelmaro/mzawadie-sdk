/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ShippingMethod
// ====================================================

export interface ShippingMethod_price {
    __typename: "Money";
    currency: string;
    amount: number;
}

export interface ShippingMethod {
    __typename: "ShippingMethod";
    id: string;
    name: string;
    price: ShippingMethod_price | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PaymentGateway
// ====================================================

export interface PaymentGateway_config {
    __typename: "GatewayConfigLine";
    field: string;
    value: string | null;
}

export interface PaymentGateway {
    __typename: "PaymentGateway";
    id: string;
    name: string;
    config: PaymentGateway_config[];
    currencies: (string | null)[];
}

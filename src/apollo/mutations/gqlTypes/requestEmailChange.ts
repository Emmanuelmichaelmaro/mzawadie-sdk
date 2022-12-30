/* tslint:disable */

/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.
import { AccountErrorCode, PermissionEnum } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: requestEmailChange
// ====================================================

export interface requestEmailChange_requestEmailChange_errors {
    __typename: "AccountError";
    code: AccountErrorCode;
    field: string | null;
    message: string | null;
}

export interface requestEmailChange_requestEmailChange_user_defaultShippingAddress_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface requestEmailChange_requestEmailChange_user_defaultShippingAddress {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: requestEmailChange_requestEmailChange_user_defaultShippingAddress_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface requestEmailChange_requestEmailChange_user_defaultBillingAddress_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface requestEmailChange_requestEmailChange_user_defaultBillingAddress {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: requestEmailChange_requestEmailChange_user_defaultBillingAddress_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface requestEmailChange_requestEmailChange_user_addresses_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface requestEmailChange_requestEmailChange_user_addresses {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: requestEmailChange_requestEmailChange_user_addresses_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface requestEmailChange_requestEmailChange_user_userPermissions {
    __typename: "UserPermission";
    code: PermissionEnum;
    name: string;
}

export interface requestEmailChange_requestEmailChange_user_avatar {
    __typename: "Image";
    url: string;
}

export interface requestEmailChange_requestEmailChange_user {
    __typename: "User";
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    isStaff: boolean;
    defaultShippingAddress: requestEmailChange_requestEmailChange_user_defaultShippingAddress | null;
    defaultBillingAddress: requestEmailChange_requestEmailChange_user_defaultBillingAddress | null;
    addresses: (requestEmailChange_requestEmailChange_user_addresses | null)[] | null;
    userPermissions: (requestEmailChange_requestEmailChange_user_userPermissions | null)[] | null;
    avatar: requestEmailChange_requestEmailChange_user_avatar | null;
}

export interface requestEmailChange_requestEmailChange {
    __typename: "RequestEmailChange";
    errors: requestEmailChange_requestEmailChange_errors[];
    user: requestEmailChange_requestEmailChange_user | null;
}

export interface requestEmailChange {
    requestEmailChange: requestEmailChange_requestEmailChange | null;
}

export interface requestEmailChangeVariables {
    channel: string;
    newEmail: string;
    password: string;
    redirectUrl: string;
}

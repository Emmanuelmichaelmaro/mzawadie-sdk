/* tslint:disable */

/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.
import { PermissionEnum, AccountErrorCode } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: externalVerify
// ====================================================

export interface externalVerify_externalVerify_user_defaultShippingAddress_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface externalVerify_externalVerify_user_defaultShippingAddress {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: externalVerify_externalVerify_user_defaultShippingAddress_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface externalVerify_externalVerify_user_defaultBillingAddress_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface externalVerify_externalVerify_user_defaultBillingAddress {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: externalVerify_externalVerify_user_defaultBillingAddress_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface externalVerify_externalVerify_user_addresses_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface externalVerify_externalVerify_user_addresses {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: externalVerify_externalVerify_user_addresses_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface externalVerify_externalVerify_user_userPermissions {
    __typename: "UserPermission";
    code: PermissionEnum;
    name: string;
}

export interface externalVerify_externalVerify_user_avatar {
    __typename: "Image";
    url: string;
}

export interface externalVerify_externalVerify_user {
    __typename: "User";
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    isStaff: boolean;
    defaultShippingAddress: externalVerify_externalVerify_user_defaultShippingAddress | null;
    defaultBillingAddress: externalVerify_externalVerify_user_defaultBillingAddress | null;
    addresses: (externalVerify_externalVerify_user_addresses | null)[] | null;
    userPermissions: (externalVerify_externalVerify_user_userPermissions | null)[] | null;
    avatar: externalVerify_externalVerify_user_avatar | null;
}

export interface externalVerify_externalVerify_errors {
    __typename: "AccountError";
    code: AccountErrorCode;
    field: string | null;
    message: string | null;
}

export interface externalVerify_externalVerify {
    __typename: "ExternalVerify";
    isValid: boolean;
    verifyData: any | null;
    user: externalVerify_externalVerify_user | null;
    errors: externalVerify_externalVerify_errors[];
}

export interface externalVerify {
    externalVerify: externalVerify_externalVerify | null;
}

export interface externalVerifyVariables {
    pluginId?: string | null;
    input: any;
}

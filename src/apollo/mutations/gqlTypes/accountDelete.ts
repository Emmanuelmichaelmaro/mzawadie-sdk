/* tslint:disable */

/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.
import { AccountErrorCode, PermissionEnum } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: accountDelete
// ====================================================

export interface accountDelete_accountDelete_errors {
    __typename: "AccountError";
    code: AccountErrorCode;
    field: string | null;
    message: string | null;
}

export interface accountDelete_accountDelete_user_defaultShippingAddress_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface accountDelete_accountDelete_user_defaultShippingAddress {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: accountDelete_accountDelete_user_defaultShippingAddress_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface accountDelete_accountDelete_user_defaultBillingAddress_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface accountDelete_accountDelete_user_defaultBillingAddress {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: accountDelete_accountDelete_user_defaultBillingAddress_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface accountDelete_accountDelete_user_addresses_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface accountDelete_accountDelete_user_addresses {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: accountDelete_accountDelete_user_addresses_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface accountDelete_accountDelete_user_userPermissions {
    __typename: "UserPermission";
    code: PermissionEnum;
    name: string;
}

export interface accountDelete_accountDelete_user_avatar {
    __typename: "Image";
    url: string;
}

export interface accountDelete_accountDelete_user {
    __typename: "User";
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    isStaff: boolean;
    defaultShippingAddress: accountDelete_accountDelete_user_defaultShippingAddress | null;
    defaultBillingAddress: accountDelete_accountDelete_user_defaultBillingAddress | null;
    addresses: (accountDelete_accountDelete_user_addresses | null)[] | null;
    userPermissions: (accountDelete_accountDelete_user_userPermissions | null)[] | null;
    avatar: accountDelete_accountDelete_user_avatar | null;
}

export interface accountDelete_accountDelete {
    __typename: "AccountDelete";
    errors: accountDelete_accountDelete_errors[];
    user: accountDelete_accountDelete_user | null;
}

export interface accountDelete {
    accountDelete: accountDelete_accountDelete | null;
}

export interface accountDeleteVariables {
    token: string;
}

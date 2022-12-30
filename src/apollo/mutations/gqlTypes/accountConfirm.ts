/* tslint:disable */

/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.
import { PermissionEnum, AccountErrorCode } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: accountConfirm
// ====================================================

export interface accountConfirm_confirmAccount_user_defaultShippingAddress_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface accountConfirm_confirmAccount_user_defaultShippingAddress {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: accountConfirm_confirmAccount_user_defaultShippingAddress_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface accountConfirm_confirmAccount_user_defaultBillingAddress_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface accountConfirm_confirmAccount_user_defaultBillingAddress {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: accountConfirm_confirmAccount_user_defaultBillingAddress_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface accountConfirm_confirmAccount_user_addresses_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface accountConfirm_confirmAccount_user_addresses {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: accountConfirm_confirmAccount_user_addresses_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface accountConfirm_confirmAccount_user_userPermissions {
    __typename: "UserPermission";
    code: PermissionEnum;
    name: string;
}

export interface accountConfirm_confirmAccount_user_avatar {
    __typename: "Image";
    url: string;
}

export interface accountConfirm_confirmAccount_user {
    __typename: "User";
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    isStaff: boolean;
    defaultShippingAddress: accountConfirm_confirmAccount_user_defaultShippingAddress | null;
    defaultBillingAddress: accountConfirm_confirmAccount_user_defaultBillingAddress | null;
    addresses: (accountConfirm_confirmAccount_user_addresses | null)[] | null;
    userPermissions: (accountConfirm_confirmAccount_user_userPermissions | null)[] | null;
    avatar: accountConfirm_confirmAccount_user_avatar | null;
}

export interface accountConfirm_confirmAccount_errors {
    __typename: "AccountError";
    code: AccountErrorCode;
    field: string | null;
    message: string | null;
}

export interface accountConfirm_confirmAccount {
    __typename: "ConfirmAccount";
    user: accountConfirm_confirmAccount_user | null;
    errors: accountConfirm_confirmAccount_errors[];
}

export interface accountConfirm {
    confirmAccount: accountConfirm_confirmAccount | null;
}

export interface accountConfirmVariables {
    email: string;
    token: string;
}

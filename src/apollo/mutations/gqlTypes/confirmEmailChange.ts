/* tslint:disable */

/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.
import { AccountErrorCode, PermissionEnum } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: confirmEmailChange
// ====================================================

export interface confirmEmailChange_confirmEmailChange_errors {
    __typename: "AccountError";
    code: AccountErrorCode;
    field: string | null;
    message: string | null;
}

export interface confirmEmailChange_confirmEmailChange_user_defaultShippingAddress_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface confirmEmailChange_confirmEmailChange_user_defaultShippingAddress {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: confirmEmailChange_confirmEmailChange_user_defaultShippingAddress_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface confirmEmailChange_confirmEmailChange_user_defaultBillingAddress_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface confirmEmailChange_confirmEmailChange_user_defaultBillingAddress {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: confirmEmailChange_confirmEmailChange_user_defaultBillingAddress_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface confirmEmailChange_confirmEmailChange_user_addresses_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface confirmEmailChange_confirmEmailChange_user_addresses {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: confirmEmailChange_confirmEmailChange_user_addresses_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface confirmEmailChange_confirmEmailChange_user_userPermissions {
    __typename: "UserPermission";
    code: PermissionEnum;
    name: string;
}

export interface confirmEmailChange_confirmEmailChange_user_avatar {
    __typename: "Image";
    url: string;
}

export interface confirmEmailChange_confirmEmailChange_user {
    __typename: "User";
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    isStaff: boolean;
    defaultShippingAddress: confirmEmailChange_confirmEmailChange_user_defaultShippingAddress | null;
    defaultBillingAddress: confirmEmailChange_confirmEmailChange_user_defaultBillingAddress | null;
    addresses: (confirmEmailChange_confirmEmailChange_user_addresses | null)[] | null;
    userPermissions: (confirmEmailChange_confirmEmailChange_user_userPermissions | null)[] | null;
    avatar: confirmEmailChange_confirmEmailChange_user_avatar | null;
}

export interface confirmEmailChange_confirmEmailChange {
    __typename: "ConfirmEmailChange";
    errors: confirmEmailChange_confirmEmailChange_errors[];
    user: confirmEmailChange_confirmEmailChange_user | null;
}

export interface confirmEmailChange {
    confirmEmailChange: confirmEmailChange_confirmEmailChange | null;
}

export interface confirmEmailChangeVariables {
    channel: string;
    token: string;
}

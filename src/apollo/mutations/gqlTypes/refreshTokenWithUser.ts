/* tslint:disable */

/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.
import { PermissionEnum, AccountErrorCode } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: refreshTokenWithUser
// ====================================================

export interface refreshTokenWithUser_tokenRefresh_user_defaultShippingAddress_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface refreshTokenWithUser_tokenRefresh_user_defaultShippingAddress {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: refreshTokenWithUser_tokenRefresh_user_defaultShippingAddress_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface refreshTokenWithUser_tokenRefresh_user_defaultBillingAddress_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface refreshTokenWithUser_tokenRefresh_user_defaultBillingAddress {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: refreshTokenWithUser_tokenRefresh_user_defaultBillingAddress_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface refreshTokenWithUser_tokenRefresh_user_addresses_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface refreshTokenWithUser_tokenRefresh_user_addresses {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: refreshTokenWithUser_tokenRefresh_user_addresses_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface refreshTokenWithUser_tokenRefresh_user_userPermissions {
    __typename: "UserPermission";
    code: PermissionEnum;
    name: string;
}

export interface refreshTokenWithUser_tokenRefresh_user_avatar {
    __typename: "Image";
    url: string;
}

export interface refreshTokenWithUser_tokenRefresh_user {
    __typename: "User";
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    isStaff: boolean;
    defaultShippingAddress: refreshTokenWithUser_tokenRefresh_user_defaultShippingAddress | null;
    defaultBillingAddress: refreshTokenWithUser_tokenRefresh_user_defaultBillingAddress | null;
    addresses: (refreshTokenWithUser_tokenRefresh_user_addresses | null)[] | null;
    userPermissions: (refreshTokenWithUser_tokenRefresh_user_userPermissions | null)[] | null;
    avatar: refreshTokenWithUser_tokenRefresh_user_avatar | null;
}

export interface refreshTokenWithUser_tokenRefresh_errors {
    __typename: "AccountError";
    code: AccountErrorCode;
    field: string | null;
    message: string | null;
}

export interface refreshTokenWithUser_tokenRefresh {
    __typename: "RefreshToken";
    token: string | null;
    user: refreshTokenWithUser_tokenRefresh_user | null;
    errors: refreshTokenWithUser_tokenRefresh_errors[];
}

export interface refreshTokenWithUser {
    tokenRefresh: refreshTokenWithUser_tokenRefresh | null;
}

export interface refreshTokenWithUserVariables {
    csrfToken: string;
}

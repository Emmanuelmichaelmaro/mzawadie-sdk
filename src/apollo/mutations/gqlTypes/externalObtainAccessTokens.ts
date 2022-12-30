/* tslint:disable */

/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.
import { PermissionEnum, AccountErrorCode } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: externalObtainAccessTokens
// ====================================================

export interface externalObtainAccessTokens_externalObtainAccessTokens_user_defaultShippingAddress_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface externalObtainAccessTokens_externalObtainAccessTokens_user_defaultShippingAddress {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: externalObtainAccessTokens_externalObtainAccessTokens_user_defaultShippingAddress_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface externalObtainAccessTokens_externalObtainAccessTokens_user_defaultBillingAddress_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface externalObtainAccessTokens_externalObtainAccessTokens_user_defaultBillingAddress {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: externalObtainAccessTokens_externalObtainAccessTokens_user_defaultBillingAddress_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface externalObtainAccessTokens_externalObtainAccessTokens_user_addresses_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface externalObtainAccessTokens_externalObtainAccessTokens_user_addresses {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: externalObtainAccessTokens_externalObtainAccessTokens_user_addresses_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface externalObtainAccessTokens_externalObtainAccessTokens_user_userPermissions {
    __typename: "UserPermission";
    code: PermissionEnum;
    name: string;
}

export interface externalObtainAccessTokens_externalObtainAccessTokens_user_avatar {
    __typename: "Image";
    url: string;
}

export interface externalObtainAccessTokens_externalObtainAccessTokens_user {
    __typename: "User";
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    isStaff: boolean;
    defaultShippingAddress: externalObtainAccessTokens_externalObtainAccessTokens_user_defaultShippingAddress | null;
    defaultBillingAddress: externalObtainAccessTokens_externalObtainAccessTokens_user_defaultBillingAddress | null;
    addresses: (externalObtainAccessTokens_externalObtainAccessTokens_user_addresses | null)[] | null;
    userPermissions:
        | (externalObtainAccessTokens_externalObtainAccessTokens_user_userPermissions | null)[]
        | null;
    avatar: externalObtainAccessTokens_externalObtainAccessTokens_user_avatar | null;
}

export interface externalObtainAccessTokens_externalObtainAccessTokens_errors {
    __typename: "AccountError";
    code: AccountErrorCode;
    field: string | null;
    message: string | null;
}

export interface externalObtainAccessTokens_externalObtainAccessTokens {
    __typename: "ExternalObtainAccessTokens";
    token: string | null;
    csrfToken: string | null;
    user: externalObtainAccessTokens_externalObtainAccessTokens_user | null;
    errors: externalObtainAccessTokens_externalObtainAccessTokens_errors[];
}

export interface externalObtainAccessTokens {
    externalObtainAccessTokens: externalObtainAccessTokens_externalObtainAccessTokens | null;
}

export interface externalObtainAccessTokensVariables {
    pluginId?: string | null;
    input: any;
}

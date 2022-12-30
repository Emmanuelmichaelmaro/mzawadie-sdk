/* tslint:disable */

/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.
import { PermissionEnum } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL query operation: UserDetails
// ====================================================

export interface UserDetails_user_defaultShippingAddress_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface UserDetails_user_defaultShippingAddress {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: UserDetails_user_defaultShippingAddress_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface UserDetails_user_defaultBillingAddress_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface UserDetails_user_defaultBillingAddress {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: UserDetails_user_defaultBillingAddress_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface UserDetails_user_addresses_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface UserDetails_user_addresses {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: UserDetails_user_addresses_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface UserDetails_user_userPermissions {
    __typename: "UserPermission";
    code: PermissionEnum;
    name: string;
}

export interface UserDetails_user_avatar {
    __typename: "Image";
    url: string;
}

export interface UserDetails_user {
    __typename: "User";
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    isStaff: boolean;
    defaultShippingAddress: UserDetails_user_defaultShippingAddress | null;
    defaultBillingAddress: UserDetails_user_defaultBillingAddress | null;
    addresses: (UserDetails_user_addresses | null)[] | null;
    userPermissions: (UserDetails_user_userPermissions | null)[] | null;
    avatar: UserDetails_user_avatar | null;
}

export interface UserDetails {
    user: UserDetails_user | null;
    authenticated: boolean;
    authenticating: boolean;
}

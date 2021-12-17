/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


import { AddressInput, AccountErrorCode, PermissionEnum } from "./../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateUserAddress
// ====================================================


export interface CreateUserAddress_accountAddressCreate_errors {
  __typename: "AccountError";
  code: AccountErrorCode;
  field: string | null;
  message: string | null;
}

export interface CreateUserAddress_accountAddressCreate_user_defaultShippingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface CreateUserAddress_accountAddressCreate_user_defaultShippingAddress {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: CreateUserAddress_accountAddressCreate_user_defaultShippingAddress_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface CreateUserAddress_accountAddressCreate_user_defaultBillingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface CreateUserAddress_accountAddressCreate_user_defaultBillingAddress {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: CreateUserAddress_accountAddressCreate_user_defaultBillingAddress_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface CreateUserAddress_accountAddressCreate_user_addresses_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface CreateUserAddress_accountAddressCreate_user_addresses {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: CreateUserAddress_accountAddressCreate_user_addresses_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface CreateUserAddress_accountAddressCreate_user_userPermissions {
  __typename: "UserPermission";
  code: PermissionEnum;
  name: string;
}

export interface CreateUserAddress_accountAddressCreate_user_avatar {
  __typename: "Image";
  url: string;
}

export interface CreateUserAddress_accountAddressCreate_user {
  __typename: "User";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isStaff: boolean;
  defaultShippingAddress: CreateUserAddress_accountAddressCreate_user_defaultShippingAddress | null;
  defaultBillingAddress: CreateUserAddress_accountAddressCreate_user_defaultBillingAddress | null;
  addresses: (CreateUserAddress_accountAddressCreate_user_addresses | null)[] | null;
  userPermissions: (CreateUserAddress_accountAddressCreate_user_userPermissions | null)[] | null;
  avatar: CreateUserAddress_accountAddressCreate_user_avatar | null;
}

export interface CreateUserAddress_accountAddressCreate {
  __typename: "AccountAddressCreate";
  errors: CreateUserAddress_accountAddressCreate_errors[];
  user: CreateUserAddress_accountAddressCreate_user | null;
}

export interface CreateUserAddress {
  accountAddressCreate: CreateUserAddress_accountAddressCreate | null;
}

export interface CreateUserAddressVariables {
  input: AddressInput;
}

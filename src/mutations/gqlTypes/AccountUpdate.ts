/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


import { AccountInput, AccountErrorCode, PermissionEnum } from "./../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: AccountUpdate
// ====================================================


export interface AccountUpdate_accountUpdate_errors {
  __typename: "AccountError";
  code: AccountErrorCode;
  field: string | null;
  message: string | null;
}

export interface AccountUpdate_accountUpdate_user_defaultShippingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface AccountUpdate_accountUpdate_user_defaultShippingAddress {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: AccountUpdate_accountUpdate_user_defaultShippingAddress_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface AccountUpdate_accountUpdate_user_defaultBillingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface AccountUpdate_accountUpdate_user_defaultBillingAddress {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: AccountUpdate_accountUpdate_user_defaultBillingAddress_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface AccountUpdate_accountUpdate_user_addresses_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface AccountUpdate_accountUpdate_user_addresses {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: AccountUpdate_accountUpdate_user_addresses_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface AccountUpdate_accountUpdate_user_userPermissions {
  __typename: "UserPermission";
  code: PermissionEnum;
  name: string;
}

export interface AccountUpdate_accountUpdate_user_avatar {
  __typename: "Image";
  url: string;
}

export interface AccountUpdate_accountUpdate_user {
  __typename: "User";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isStaff: boolean;
  defaultShippingAddress: AccountUpdate_accountUpdate_user_defaultShippingAddress | null;
  defaultBillingAddress: AccountUpdate_accountUpdate_user_defaultBillingAddress | null;
  addresses: (AccountUpdate_accountUpdate_user_addresses | null)[] | null;
  userPermissions: (AccountUpdate_accountUpdate_user_userPermissions | null)[] | null;
  avatar: AccountUpdate_accountUpdate_user_avatar | null;
}

export interface AccountUpdate_accountUpdate {
  __typename: "AccountUpdate";
  errors: AccountUpdate_accountUpdate_errors[];
  user: AccountUpdate_accountUpdate_user | null;
}

export interface AccountUpdate {
  accountUpdate: AccountUpdate_accountUpdate | null;
}

export interface AccountUpdateVariables {
  input: AccountInput;
}

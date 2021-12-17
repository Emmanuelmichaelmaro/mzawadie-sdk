/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


import { AccountErrorCode, PermissionEnum } from "./../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: SetPassword
// ====================================================


export interface SetPassword_setPassword_errors {
  __typename: "AccountError";
  code: AccountErrorCode;
  field: string | null;
  message: string | null;
}

export interface SetPassword_setPassword_user_defaultShippingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface SetPassword_setPassword_user_defaultShippingAddress {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: SetPassword_setPassword_user_defaultShippingAddress_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface SetPassword_setPassword_user_defaultBillingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface SetPassword_setPassword_user_defaultBillingAddress {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: SetPassword_setPassword_user_defaultBillingAddress_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface SetPassword_setPassword_user_addresses_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface SetPassword_setPassword_user_addresses {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: SetPassword_setPassword_user_addresses_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface SetPassword_setPassword_user_userPermissions {
  __typename: "UserPermission";
  code: PermissionEnum;
  name: string;
}

export interface SetPassword_setPassword_user_avatar {
  __typename: "Image";
  url: string;
}

export interface SetPassword_setPassword_user {
  __typename: "User";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isStaff: boolean;
  defaultShippingAddress: SetPassword_setPassword_user_defaultShippingAddress | null;
  defaultBillingAddress: SetPassword_setPassword_user_defaultBillingAddress | null;
  addresses: (SetPassword_setPassword_user_addresses | null)[] | null;
  userPermissions: (SetPassword_setPassword_user_userPermissions | null)[] | null;
  avatar: SetPassword_setPassword_user_avatar | null;
}

export interface SetPassword_setPassword_accountErrors {
  __typename: "AccountError";
  field: string | null;
  message: string | null;
  code: AccountErrorCode;
}

export interface SetPassword_setPassword {
  __typename: "SetPassword";
  errors: SetPassword_setPassword_errors[];
  token: string | null;
  user: SetPassword_setPassword_user | null;
  accountErrors: SetPassword_setPassword_accountErrors[];
}

export interface SetPassword {
  setPassword: SetPassword_setPassword | null;
}

export interface SetPasswordVariables {
  token: string;
  email: string;
  password: string;
}

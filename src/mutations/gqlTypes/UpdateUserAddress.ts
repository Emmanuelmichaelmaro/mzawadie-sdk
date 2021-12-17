/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


import { AddressInput, AccountErrorCode, PermissionEnum } from "./../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateUserAddress
// ====================================================


export interface UpdateUserAddress_accountAddressUpdate_errors {
  __typename: "AccountError";
  code: AccountErrorCode;
  field: string | null;
  message: string | null;
}

export interface UpdateUserAddress_accountAddressUpdate_user_defaultShippingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface UpdateUserAddress_accountAddressUpdate_user_defaultShippingAddress {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: UpdateUserAddress_accountAddressUpdate_user_defaultShippingAddress_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface UpdateUserAddress_accountAddressUpdate_user_defaultBillingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface UpdateUserAddress_accountAddressUpdate_user_defaultBillingAddress {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: UpdateUserAddress_accountAddressUpdate_user_defaultBillingAddress_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface UpdateUserAddress_accountAddressUpdate_user_addresses_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface UpdateUserAddress_accountAddressUpdate_user_addresses {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: UpdateUserAddress_accountAddressUpdate_user_addresses_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface UpdateUserAddress_accountAddressUpdate_user_userPermissions {
  __typename: "UserPermission";
  code: PermissionEnum;
  name: string;
}

export interface UpdateUserAddress_accountAddressUpdate_user_avatar {
  __typename: "Image";
  url: string;
}

export interface UpdateUserAddress_accountAddressUpdate_user {
  __typename: "User";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isStaff: boolean;
  defaultShippingAddress: UpdateUserAddress_accountAddressUpdate_user_defaultShippingAddress | null;
  defaultBillingAddress: UpdateUserAddress_accountAddressUpdate_user_defaultBillingAddress | null;
  addresses: (UpdateUserAddress_accountAddressUpdate_user_addresses | null)[] | null;
  userPermissions: (UpdateUserAddress_accountAddressUpdate_user_userPermissions | null)[] | null;
  avatar: UpdateUserAddress_accountAddressUpdate_user_avatar | null;
}

export interface UpdateUserAddress_accountAddressUpdate {
  __typename: "AccountAddressUpdate";
  errors: UpdateUserAddress_accountAddressUpdate_errors[];
  user: UpdateUserAddress_accountAddressUpdate_user | null;
}

export interface UpdateUserAddress {
  accountAddressUpdate: UpdateUserAddress_accountAddressUpdate | null;
}

export interface UpdateUserAddressVariables {
  input: AddressInput;
  id: string;
}

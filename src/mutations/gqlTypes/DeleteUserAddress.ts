/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


import { AccountErrorCode, PermissionEnum } from "./../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteUserAddress
// ====================================================


export interface DeleteUserAddress_accountAddressDelete_errors {
  __typename: "AccountError";
  code: AccountErrorCode;
  field: string | null;
  message: string | null;
}

export interface DeleteUserAddress_accountAddressDelete_user_defaultShippingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface DeleteUserAddress_accountAddressDelete_user_defaultShippingAddress {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: DeleteUserAddress_accountAddressDelete_user_defaultShippingAddress_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface DeleteUserAddress_accountAddressDelete_user_defaultBillingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface DeleteUserAddress_accountAddressDelete_user_defaultBillingAddress {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: DeleteUserAddress_accountAddressDelete_user_defaultBillingAddress_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface DeleteUserAddress_accountAddressDelete_user_addresses_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface DeleteUserAddress_accountAddressDelete_user_addresses {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: DeleteUserAddress_accountAddressDelete_user_addresses_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface DeleteUserAddress_accountAddressDelete_user_userPermissions {
  __typename: "UserPermission";
  code: PermissionEnum;
  name: string;
}

export interface DeleteUserAddress_accountAddressDelete_user_avatar {
  __typename: "Image";
  url: string;
}

export interface DeleteUserAddress_accountAddressDelete_user {
  __typename: "User";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isStaff: boolean;
  defaultShippingAddress: DeleteUserAddress_accountAddressDelete_user_defaultShippingAddress | null;
  defaultBillingAddress: DeleteUserAddress_accountAddressDelete_user_defaultBillingAddress | null;
  addresses: (DeleteUserAddress_accountAddressDelete_user_addresses | null)[] | null;
  userPermissions: (DeleteUserAddress_accountAddressDelete_user_userPermissions | null)[] | null;
  avatar: DeleteUserAddress_accountAddressDelete_user_avatar | null;
}

export interface DeleteUserAddress_accountAddressDelete {
  __typename: "AccountAddressDelete";
  errors: DeleteUserAddress_accountAddressDelete_errors[];
  user: DeleteUserAddress_accountAddressDelete_user | null;
}

export interface DeleteUserAddress {
  accountAddressDelete: DeleteUserAddress_accountAddressDelete | null;
}

export interface DeleteUserAddressVariables {
  addressId: string;
}

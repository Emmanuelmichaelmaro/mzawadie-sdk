/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


import { AddressTypeEnum, AccountErrorCode } from "./../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: SetCustomerDefaultAddress
// ====================================================


export interface SetCustomerDefaultAddress_accountSetDefaultAddress_errors {
  __typename: "AccountError";
  code: AccountErrorCode;
  field: string | null;
  message: string | null;
}

export interface SetCustomerDefaultAddress_accountSetDefaultAddress_user_defaultShippingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface SetCustomerDefaultAddress_accountSetDefaultAddress_user_defaultShippingAddress {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: SetCustomerDefaultAddress_accountSetDefaultAddress_user_defaultShippingAddress_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface SetCustomerDefaultAddress_accountSetDefaultAddress_user_defaultBillingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface SetCustomerDefaultAddress_accountSetDefaultAddress_user_defaultBillingAddress {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: SetCustomerDefaultAddress_accountSetDefaultAddress_user_defaultBillingAddress_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface SetCustomerDefaultAddress_accountSetDefaultAddress_user_addresses_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface SetCustomerDefaultAddress_accountSetDefaultAddress_user_addresses {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: SetCustomerDefaultAddress_accountSetDefaultAddress_user_addresses_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface SetCustomerDefaultAddress_accountSetDefaultAddress_user {
  __typename: "User";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isStaff: boolean;
  defaultShippingAddress: SetCustomerDefaultAddress_accountSetDefaultAddress_user_defaultShippingAddress | null;
  defaultBillingAddress: SetCustomerDefaultAddress_accountSetDefaultAddress_user_defaultBillingAddress | null;
  addresses: (SetCustomerDefaultAddress_accountSetDefaultAddress_user_addresses | null)[] | null;
}

export interface SetCustomerDefaultAddress_accountSetDefaultAddress {
  __typename: "AccountSetDefaultAddress";
  errors: SetCustomerDefaultAddress_accountSetDefaultAddress_errors[];
  user: SetCustomerDefaultAddress_accountSetDefaultAddress_user | null;
}

export interface SetCustomerDefaultAddress {
  accountSetDefaultAddress: SetCustomerDefaultAddress_accountSetDefaultAddress | null;
}

export interface SetCustomerDefaultAddressVariables {
  id: string;
  type: AddressTypeEnum;
}

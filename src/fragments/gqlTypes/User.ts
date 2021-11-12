/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL fragment: User
// ====================================================


export interface User_defaultShippingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface User_defaultShippingAddress {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: User_defaultShippingAddress_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface User_defaultBillingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface User_defaultBillingAddress {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: User_defaultBillingAddress_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface User_addresses_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface User_addresses {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: User_addresses_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface User {
  __typename: "User";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isStaff: boolean;
  defaultShippingAddress: User_defaultShippingAddress | null;
  defaultBillingAddress: User_defaultBillingAddress | null;
  addresses: (User_addresses | null)[] | null;
}

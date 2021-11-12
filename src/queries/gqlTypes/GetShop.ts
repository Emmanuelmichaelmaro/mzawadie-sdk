/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: GetShop
// ====================================================


export interface GetShop_shop_defaultCountry {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface GetShop_shop_countries {
  __typename: "CountryDisplay";
  country: string;
  code: string;
}

export interface GetShop_shop {
  __typename: "Shop";
  displayGrossPrices: boolean;
  defaultCountry: GetShop_shop_defaultCountry | null;
  countries: GetShop_shop_countries[];
}

export interface GetShop {
  shop: GetShop_shop;
}

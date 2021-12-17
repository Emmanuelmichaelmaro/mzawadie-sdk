/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


import { PaymentChargeStatusEnum, OrderStatus, JobStatusEnum } from "./../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL query operation: UserOrderByToken
// ====================================================


export interface UserOrderByToken_orderByToken_shippingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface UserOrderByToken_orderByToken_shippingAddress {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: UserOrderByToken_orderByToken_shippingAddress_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface UserOrderByToken_orderByToken_lines_variant_pricing_priceUndiscounted_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface UserOrderByToken_orderByToken_lines_variant_pricing_priceUndiscounted_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface UserOrderByToken_orderByToken_lines_variant_pricing_priceUndiscounted {
  __typename: "TaxedMoney";
  gross: UserOrderByToken_orderByToken_lines_variant_pricing_priceUndiscounted_gross;
  net: UserOrderByToken_orderByToken_lines_variant_pricing_priceUndiscounted_net;
}

export interface UserOrderByToken_orderByToken_lines_variant_pricing_price_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface UserOrderByToken_orderByToken_lines_variant_pricing_price_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface UserOrderByToken_orderByToken_lines_variant_pricing_price {
  __typename: "TaxedMoney";
  gross: UserOrderByToken_orderByToken_lines_variant_pricing_price_gross;
  net: UserOrderByToken_orderByToken_lines_variant_pricing_price_net;
}

export interface UserOrderByToken_orderByToken_lines_variant_pricing {
  __typename: "VariantPricingInfo";
  onSale: boolean | null;
  priceUndiscounted: UserOrderByToken_orderByToken_lines_variant_pricing_priceUndiscounted | null;
  price: UserOrderByToken_orderByToken_lines_variant_pricing_price | null;
}

export interface UserOrderByToken_orderByToken_lines_variant_attributes_attribute {
  __typename: "Attribute";
  id: string;
  name: string | null;
}

export interface UserOrderByToken_orderByToken_lines_variant_attributes_values {
  __typename: "AttributeValue";
  id: string;
  name: string | null;
  value: string | null;
}

export interface UserOrderByToken_orderByToken_lines_variant_attributes {
  __typename: "SelectedAttribute";
  attribute: UserOrderByToken_orderByToken_lines_variant_attributes_attribute;
  values: (UserOrderByToken_orderByToken_lines_variant_attributes_values | null)[];
}

export interface UserOrderByToken_orderByToken_lines_variant_product_thumbnail {
  __typename: "Image";
  url: string;
  alt: string | null;
}

export interface UserOrderByToken_orderByToken_lines_variant_product_thumbnail2x {
  __typename: "Image";
  url: string;
}

export interface UserOrderByToken_orderByToken_lines_variant_product_productType {
  __typename: "ProductType";
  id: string;
  isShippingRequired: boolean;
}

export interface UserOrderByToken_orderByToken_lines_variant_product {
  __typename: "Product";
  id: string;
  name: string;
  slug: string;
  thumbnail: UserOrderByToken_orderByToken_lines_variant_product_thumbnail | null;
  thumbnail2x: UserOrderByToken_orderByToken_lines_variant_product_thumbnail2x | null;
  productType: UserOrderByToken_orderByToken_lines_variant_product_productType;
}

export interface UserOrderByToken_orderByToken_lines_variant {
  __typename: "ProductVariant";
  id: string;
  name: string;
  sku: string;
  quantityAvailable: number;
  pricing: UserOrderByToken_orderByToken_lines_variant_pricing | null;
  attributes: UserOrderByToken_orderByToken_lines_variant_attributes[];
  product: UserOrderByToken_orderByToken_lines_variant_product;
}

export interface UserOrderByToken_orderByToken_lines_unitPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface UserOrderByToken_orderByToken_lines_unitPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface UserOrderByToken_orderByToken_lines_unitPrice {
  __typename: "TaxedMoney";
  currency: string;
  gross: UserOrderByToken_orderByToken_lines_unitPrice_gross;
  net: UserOrderByToken_orderByToken_lines_unitPrice_net;
}

export interface UserOrderByToken_orderByToken_lines {
  __typename: "OrderLine";
  productName: string;
  quantity: number;
  variant: UserOrderByToken_orderByToken_lines_variant | null;
  unitPrice: UserOrderByToken_orderByToken_lines_unitPrice;
}

export interface UserOrderByToken_orderByToken_subtotal_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface UserOrderByToken_orderByToken_subtotal_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface UserOrderByToken_orderByToken_subtotal {
  __typename: "TaxedMoney";
  gross: UserOrderByToken_orderByToken_subtotal_gross;
  net: UserOrderByToken_orderByToken_subtotal_net;
}

export interface UserOrderByToken_orderByToken_total_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface UserOrderByToken_orderByToken_total_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface UserOrderByToken_orderByToken_total {
  __typename: "TaxedMoney";
  gross: UserOrderByToken_orderByToken_total_gross;
  net: UserOrderByToken_orderByToken_total_net;
}

export interface UserOrderByToken_orderByToken_shippingPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface UserOrderByToken_orderByToken_shippingPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface UserOrderByToken_orderByToken_shippingPrice {
  __typename: "TaxedMoney";
  gross: UserOrderByToken_orderByToken_shippingPrice_gross;
  net: UserOrderByToken_orderByToken_shippingPrice_net;
}

export interface UserOrderByToken_orderByToken_invoices {
  __typename: "Invoice";
  id: string;
  number: string | null;
  createdAt: any;
  url: string | null;
  status: JobStatusEnum;
}

export interface UserOrderByToken_orderByToken {
  __typename: "Order";
  userEmail: string | null;
  paymentStatus: PaymentChargeStatusEnum;
  paymentStatusDisplay: string;
  status: OrderStatus;
  statusDisplay: string | null;
  id: string;
  token: string;
  number: string | null;
  shippingAddress: UserOrderByToken_orderByToken_shippingAddress | null;
  lines: (UserOrderByToken_orderByToken_lines | null)[];
  subtotal: UserOrderByToken_orderByToken_subtotal;
  total: UserOrderByToken_orderByToken_total;
  shippingPrice: UserOrderByToken_orderByToken_shippingPrice;
  invoices: (UserOrderByToken_orderByToken_invoices | null)[] | null;
}

export interface UserOrderByToken {
  orderByToken: UserOrderByToken_orderByToken | null;
}

export interface UserOrderByTokenVariables {
  token: any;
}

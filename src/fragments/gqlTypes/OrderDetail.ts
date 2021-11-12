/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


import { PaymentChargeStatusEnum, OrderStatus } from "./../../gqlTypes/globalTypes";

// ====================================================
// GraphQL fragment: OrderDetail
// ====================================================


export interface OrderDetail_shippingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface OrderDetail_shippingAddress {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: OrderDetail_shippingAddress_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface OrderDetail_lines_variant_pricing_priceUndiscounted_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderDetail_lines_variant_pricing_priceUndiscounted_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderDetail_lines_variant_pricing_priceUndiscounted {
  __typename: "TaxedMoney";
  gross: OrderDetail_lines_variant_pricing_priceUndiscounted_gross;
  net: OrderDetail_lines_variant_pricing_priceUndiscounted_net;
}

export interface OrderDetail_lines_variant_pricing_price_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderDetail_lines_variant_pricing_price_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderDetail_lines_variant_pricing_price {
  __typename: "TaxedMoney";
  gross: OrderDetail_lines_variant_pricing_price_gross;
  net: OrderDetail_lines_variant_pricing_price_net;
}

export interface OrderDetail_lines_variant_pricing {
  __typename: "VariantPricingInfo";
  onSale: boolean | null;
  priceUndiscounted: OrderDetail_lines_variant_pricing_priceUndiscounted | null;
  price: OrderDetail_lines_variant_pricing_price | null;
}

export interface OrderDetail_lines_variant_attributes_attribute {
  __typename: "Attribute";
  id: string;
  name: string | null;
}

export interface OrderDetail_lines_variant_attributes_values {
  __typename: "AttributeValue";
  id: string;
  name: string | null;
  value: string | null;
}

export interface OrderDetail_lines_variant_attributes {
  __typename: "SelectedAttribute";
  attribute: OrderDetail_lines_variant_attributes_attribute;
  values: (OrderDetail_lines_variant_attributes_values | null)[];
}

export interface OrderDetail_lines_variant_product_thumbnail {
  __typename: "Image";
  url: string;
  alt: string | null;
}

export interface OrderDetail_lines_variant_product_thumbnail2x {
  __typename: "Image";
  url: string;
}

export interface OrderDetail_lines_variant_product_productType {
  __typename: "ProductType";
  id: string;
  isShippingRequired: boolean;
}

export interface OrderDetail_lines_variant_product {
  __typename: "Product";
  id: string;
  name: string;
  slug: string;
  thumbnail: OrderDetail_lines_variant_product_thumbnail | null;
  thumbnail2x: OrderDetail_lines_variant_product_thumbnail2x | null;
  productType: OrderDetail_lines_variant_product_productType;
}

export interface OrderDetail_lines_variant {
  __typename: "ProductVariant";
  id: string;
  name: string;
  sku: string;
  quantityAvailable: number;
  pricing: OrderDetail_lines_variant_pricing | null;
  attributes: OrderDetail_lines_variant_attributes[];
  product: OrderDetail_lines_variant_product;
}

export interface OrderDetail_lines_unitPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderDetail_lines_unitPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderDetail_lines_unitPrice {
  __typename: "TaxedMoney";
  currency: string;
  gross: OrderDetail_lines_unitPrice_gross;
  net: OrderDetail_lines_unitPrice_net;
}

export interface OrderDetail_lines {
  __typename: "OrderLine";
  productName: string;
  quantity: number;
  variant: OrderDetail_lines_variant | null;
  unitPrice: OrderDetail_lines_unitPrice;
}

export interface OrderDetail_subtotal_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderDetail_subtotal_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderDetail_subtotal {
  __typename: "TaxedMoney";
  gross: OrderDetail_subtotal_gross;
  net: OrderDetail_subtotal_net;
}

export interface OrderDetail_total_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderDetail_total_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderDetail_total {
  __typename: "TaxedMoney";
  gross: OrderDetail_total_gross;
  net: OrderDetail_total_net;
}

export interface OrderDetail_shippingPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderDetail_shippingPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderDetail_shippingPrice {
  __typename: "TaxedMoney";
  gross: OrderDetail_shippingPrice_gross;
  net: OrderDetail_shippingPrice_net;
}

export interface OrderDetail {
  __typename: "Order";
  userEmail: string | null;
  paymentStatus: PaymentChargeStatusEnum;
  paymentStatusDisplay: string;
  status: OrderStatus;
  statusDisplay: string | null;
  id: string;
  token: string;
  number: string | null;
  shippingAddress: OrderDetail_shippingAddress | null;
  lines: (OrderDetail_lines | null)[];
  subtotal: OrderDetail_subtotal;
  total: OrderDetail_total;
  shippingPrice: OrderDetail_shippingPrice;
}

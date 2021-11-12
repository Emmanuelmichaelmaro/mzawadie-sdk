/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


import { CheckoutErrorCode } from "./../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: RemoveCheckoutPromoCode
// ====================================================


export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_totalPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_totalPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_totalPrice {
  __typename: "TaxedMoney";
  gross: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_totalPrice_gross;
  net: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_totalPrice_net;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_subtotalPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_subtotalPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_subtotalPrice {
  __typename: "TaxedMoney";
  gross: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_subtotalPrice_gross;
  net: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_subtotalPrice_net;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_billingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_billingAddress {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_billingAddress_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_shippingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_shippingAddress {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_shippingAddress_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_availableShippingMethods_price {
  __typename: "Money";
  currency: string;
  amount: number;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_availableShippingMethods {
  __typename: "ShippingMethod";
  id: string;
  name: string;
  price: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_availableShippingMethods_price | null;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_shippingMethod_price {
  __typename: "Money";
  currency: string;
  amount: number;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_shippingMethod {
  __typename: "ShippingMethod";
  id: string;
  name: string;
  price: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_shippingMethod_price | null;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_shippingPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_shippingPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_shippingPrice {
  __typename: "TaxedMoney";
  gross: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_shippingPrice_gross;
  net: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_shippingPrice_net;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_totalPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_totalPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_totalPrice {
  __typename: "TaxedMoney";
  gross: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_totalPrice_gross;
  net: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_totalPrice_net;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_pricing_priceUndiscounted_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_pricing_priceUndiscounted_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_pricing_priceUndiscounted {
  __typename: "TaxedMoney";
  gross: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_pricing_priceUndiscounted_gross;
  net: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_pricing_priceUndiscounted_net;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_pricing_price_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_pricing_price_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_pricing_price {
  __typename: "TaxedMoney";
  gross: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_pricing_price_gross;
  net: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_pricing_price_net;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_pricing {
  __typename: "VariantPricingInfo";
  onSale: boolean | null;
  priceUndiscounted: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_pricing_priceUndiscounted | null;
  price: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_pricing_price | null;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_attributes_attribute {
  __typename: "Attribute";
  id: string;
  name: string | null;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_attributes_values {
  __typename: "AttributeValue";
  id: string;
  name: string | null;
  value: string | null;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_attributes {
  __typename: "SelectedAttribute";
  attribute: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_attributes_attribute;
  values: (RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_attributes_values | null)[];
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_product_thumbnail {
  __typename: "Image";
  url: string;
  alt: string | null;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_product_thumbnail2x {
  __typename: "Image";
  url: string;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_product_productType {
  __typename: "ProductType";
  id: string;
  isShippingRequired: boolean;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_product {
  __typename: "Product";
  id: string;
  name: string;
  slug: string;
  thumbnail: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_product_thumbnail | null;
  thumbnail2x: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_product_thumbnail2x | null;
  productType: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_product_productType;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant {
  __typename: "ProductVariant";
  id: string;
  name: string;
  sku: string;
  quantityAvailable: number;
  pricing: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_pricing | null;
  attributes: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_attributes[];
  product: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant_product;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines {
  __typename: "CheckoutLine";
  id: string;
  quantity: number;
  totalPrice: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_totalPrice | null;
  variant: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines_variant;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_discount {
  __typename: "Money";
  currency: string;
  amount: number;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_availablePaymentGateways_config {
  __typename: "GatewayConfigLine";
  field: string;
  value: string | null;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_availablePaymentGateways {
  __typename: "PaymentGateway";
  id: string;
  name: string;
  config: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_availablePaymentGateways_config[];
  currencies: (string | null)[];
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout {
  __typename: "Checkout";
  token: any;
  id: string;
  totalPrice: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_totalPrice | null;
  subtotalPrice: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_subtotalPrice | null;
  billingAddress: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_billingAddress | null;
  shippingAddress: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_shippingAddress | null;
  email: string;
  availableShippingMethods: (RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_availableShippingMethods | null)[];
  shippingMethod: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_shippingMethod | null;
  shippingPrice: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_shippingPrice | null;
  lines: (RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_lines | null)[] | null;
  isShippingRequired: boolean;
  discount: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_discount | null;
  discountName: string | null;
  translatedDiscountName: string | null;
  voucherCode: string | null;
  availablePaymentGateways: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout_availablePaymentGateways[];
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode_errors {
  __typename: "CheckoutError";
  code: CheckoutErrorCode;
  field: string | null;
  message: string | null;
}

export interface RemoveCheckoutPromoCode_checkoutRemovePromoCode {
  __typename: "CheckoutRemovePromoCode";
  checkout: RemoveCheckoutPromoCode_checkoutRemovePromoCode_checkout | null;
  errors: RemoveCheckoutPromoCode_checkoutRemovePromoCode_errors[];
}

export interface RemoveCheckoutPromoCode {
  checkoutRemovePromoCode: RemoveCheckoutPromoCode_checkoutRemovePromoCode | null;
}

export interface RemoveCheckoutPromoCodeVariables {
  checkoutId: string;
  promoCode: string;
}

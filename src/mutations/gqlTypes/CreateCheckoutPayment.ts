/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


import { PaymentInput, PaymentErrorCode } from "./../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateCheckoutPayment
// ====================================================


export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_totalPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_totalPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_totalPrice {
  __typename: "TaxedMoney";
  gross: CreateCheckoutPayment_checkoutPaymentCreate_checkout_totalPrice_gross;
  net: CreateCheckoutPayment_checkoutPaymentCreate_checkout_totalPrice_net;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_subtotalPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_subtotalPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_subtotalPrice {
  __typename: "TaxedMoney";
  gross: CreateCheckoutPayment_checkoutPaymentCreate_checkout_subtotalPrice_gross;
  net: CreateCheckoutPayment_checkoutPaymentCreate_checkout_subtotalPrice_net;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_billingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_billingAddress {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: CreateCheckoutPayment_checkoutPaymentCreate_checkout_billingAddress_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_shippingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_shippingAddress {
  __typename: "Address";
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: CreateCheckoutPayment_checkoutPaymentCreate_checkout_shippingAddress_country;
  countryArea: string;
  phone: string | null;
  isDefaultBillingAddress: boolean | null;
  isDefaultShippingAddress: boolean | null;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_availableShippingMethods_price {
  __typename: "Money";
  currency: string;
  amount: number;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_availableShippingMethods {
  __typename: "ShippingMethod";
  id: string;
  name: string;
  price: CreateCheckoutPayment_checkoutPaymentCreate_checkout_availableShippingMethods_price | null;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_shippingMethod_price {
  __typename: "Money";
  currency: string;
  amount: number;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_shippingMethod {
  __typename: "ShippingMethod";
  id: string;
  name: string;
  price: CreateCheckoutPayment_checkoutPaymentCreate_checkout_shippingMethod_price | null;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_shippingPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_shippingPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_shippingPrice {
  __typename: "TaxedMoney";
  gross: CreateCheckoutPayment_checkoutPaymentCreate_checkout_shippingPrice_gross;
  net: CreateCheckoutPayment_checkoutPaymentCreate_checkout_shippingPrice_net;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_totalPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_totalPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_totalPrice {
  __typename: "TaxedMoney";
  gross: CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_totalPrice_gross;
  net: CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_totalPrice_net;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_pricing_priceUndiscounted_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_pricing_priceUndiscounted_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_pricing_priceUndiscounted {
  __typename: "TaxedMoney";
  gross: CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_pricing_priceUndiscounted_gross;
  net: CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_pricing_priceUndiscounted_net;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_pricing_price_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_pricing_price_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_pricing_price {
  __typename: "TaxedMoney";
  gross: CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_pricing_price_gross;
  net: CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_pricing_price_net;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_pricing {
  __typename: "VariantPricingInfo";
  onSale: boolean | null;
  priceUndiscounted: CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_pricing_priceUndiscounted | null;
  price: CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_pricing_price | null;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_attributes_attribute {
  __typename: "Attribute";
  id: string;
  name: string | null;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_attributes_values {
  __typename: "AttributeValue";
  id: string;
  name: string | null;
  value: string | null;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_attributes {
  __typename: "SelectedAttribute";
  attribute: CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_attributes_attribute;
  values: (CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_attributes_values | null)[];
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_product_thumbnail {
  __typename: "Image";
  url: string;
  alt: string | null;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_product_thumbnail2x {
  __typename: "Image";
  url: string;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_product_productType {
  __typename: "ProductType";
  id: string;
  isShippingRequired: boolean;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_product {
  __typename: "Product";
  id: string;
  name: string;
  slug: string;
  thumbnail: CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_product_thumbnail | null;
  thumbnail2x: CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_product_thumbnail2x | null;
  productType: CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_product_productType;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant {
  __typename: "ProductVariant";
  id: string;
  name: string;
  sku: string;
  quantityAvailable: number;
  pricing: CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_pricing | null;
  attributes: CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_attributes[];
  product: CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant_product;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines {
  __typename: "CheckoutLine";
  id: string;
  quantity: number;
  totalPrice: CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_totalPrice | null;
  variant: CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines_variant;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_discount {
  __typename: "Money";
  currency: string;
  amount: number;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_availablePaymentGateways_config {
  __typename: "GatewayConfigLine";
  field: string;
  value: string | null;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout_availablePaymentGateways {
  __typename: "PaymentGateway";
  id: string;
  name: string;
  config: CreateCheckoutPayment_checkoutPaymentCreate_checkout_availablePaymentGateways_config[];
  currencies: (string | null)[];
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_checkout {
  __typename: "Checkout";
  token: any;
  id: string;
  totalPrice: CreateCheckoutPayment_checkoutPaymentCreate_checkout_totalPrice | null;
  subtotalPrice: CreateCheckoutPayment_checkoutPaymentCreate_checkout_subtotalPrice | null;
  billingAddress: CreateCheckoutPayment_checkoutPaymentCreate_checkout_billingAddress | null;
  shippingAddress: CreateCheckoutPayment_checkoutPaymentCreate_checkout_shippingAddress | null;
  email: string;
  availableShippingMethods: (CreateCheckoutPayment_checkoutPaymentCreate_checkout_availableShippingMethods | null)[];
  shippingMethod: CreateCheckoutPayment_checkoutPaymentCreate_checkout_shippingMethod | null;
  shippingPrice: CreateCheckoutPayment_checkoutPaymentCreate_checkout_shippingPrice | null;
  lines: (CreateCheckoutPayment_checkoutPaymentCreate_checkout_lines | null)[] | null;
  isShippingRequired: boolean;
  discount: CreateCheckoutPayment_checkoutPaymentCreate_checkout_discount | null;
  discountName: string | null;
  translatedDiscountName: string | null;
  voucherCode: string | null;
  availablePaymentGateways: CreateCheckoutPayment_checkoutPaymentCreate_checkout_availablePaymentGateways[];
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_payment_creditCard {
  __typename: "CreditCard";
  brand: string;
  firstDigits: string | null;
  lastDigits: string;
  expMonth: number | null;
  expYear: number | null;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_payment_total {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_payment {
  __typename: "Payment";
  id: string;
  gateway: string;
  token: string;
  creditCard: CreateCheckoutPayment_checkoutPaymentCreate_payment_creditCard | null;
  total: CreateCheckoutPayment_checkoutPaymentCreate_payment_total | null;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate_errors {
  __typename: "PaymentError";
  code: PaymentErrorCode;
  field: string | null;
  message: string | null;
}

export interface CreateCheckoutPayment_checkoutPaymentCreate {
  __typename: "CheckoutPaymentCreate";
  checkout: CreateCheckoutPayment_checkoutPaymentCreate_checkout | null;
  payment: CreateCheckoutPayment_checkoutPaymentCreate_payment | null;
  errors: CreateCheckoutPayment_checkoutPaymentCreate_errors[];
}

export interface CreateCheckoutPayment {
  checkoutPaymentCreate: CreateCheckoutPayment_checkoutPaymentCreate | null;
}

export interface CreateCheckoutPaymentVariables {
  checkoutId: string;
  paymentInput: PaymentInput;
}

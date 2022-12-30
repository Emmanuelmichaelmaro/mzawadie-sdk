/* tslint:disable */

/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.
import { AddressInput, CheckoutErrorCode } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateCheckoutBillingAddressWithEmail
// ====================================================

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_errors {
    __typename: "CheckoutError";
    code: CheckoutErrorCode;
    field: string | null;
    message: string | null;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_totalPrice_gross {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_totalPrice_net {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_totalPrice {
    __typename: "TaxedMoney";
    gross: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_totalPrice_gross;
    net: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_totalPrice_net;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_subtotalPrice_gross {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_subtotalPrice_net {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_subtotalPrice {
    __typename: "TaxedMoney";
    gross: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_subtotalPrice_gross;
    net: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_subtotalPrice_net;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_billingAddress_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_billingAddress {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_billingAddress_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_shippingAddress_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_shippingAddress {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_shippingAddress_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_availableShippingMethods_price {
    __typename: "Money";
    currency: string;
    amount: number;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_availableShippingMethods {
    __typename: "ShippingMethod";
    id: string;
    name: string;
    price: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_availableShippingMethods_price | null;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_shippingMethod_price {
    __typename: "Money";
    currency: string;
    amount: number;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_shippingMethod {
    __typename: "ShippingMethod";
    id: string;
    name: string;
    price: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_shippingMethod_price | null;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_shippingPrice_gross {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_shippingPrice_net {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_shippingPrice {
    __typename: "TaxedMoney";
    gross: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_shippingPrice_gross;
    net: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_shippingPrice_net;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_totalPrice_gross {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_totalPrice_net {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_totalPrice {
    __typename: "TaxedMoney";
    gross: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_totalPrice_gross;
    net: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_totalPrice_net;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_pricing_priceUndiscounted_gross {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_pricing_priceUndiscounted_net {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_pricing_priceUndiscounted {
    __typename: "TaxedMoney";
    gross: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_pricing_priceUndiscounted_gross;
    net: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_pricing_priceUndiscounted_net;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_pricing_price_gross {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_pricing_price_net {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_pricing_price {
    __typename: "TaxedMoney";
    gross: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_pricing_price_gross;
    net: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_pricing_price_net;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_pricing {
    __typename: "VariantPricingInfo";
    onSale: boolean | null;
    priceUndiscounted: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_pricing_priceUndiscounted | null;
    price: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_pricing_price | null;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_attributes_attribute {
    __typename: "Attribute";
    id: string;
    name: string | null;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_attributes_values {
    __typename: "AttributeValue";
    id: string;
    name: string | null;
    value: string | null;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_attributes {
    __typename: "SelectedAttribute";
    attribute: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_attributes_attribute;
    values: (UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_attributes_values | null)[];
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_product_thumbnail {
    __typename: "Image";
    url: string;
    alt: string | null;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_product_thumbnail2x {
    __typename: "Image";
    url: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_product_productType {
    __typename: "ProductType";
    id: string;
    isShippingRequired: boolean;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_product {
    __typename: "Product";
    id: string;
    name: string;
    slug: string;
    thumbnail: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_product_thumbnail | null;
    thumbnail2x: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_product_thumbnail2x | null;
    productType: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_product_productType;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant {
    __typename: "ProductVariant";
    id: string;
    name: string;
    sku: string;
    quantityAvailable: number;
    pricing: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_pricing | null;
    attributes: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_attributes[];
    product: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant_product;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines {
    __typename: "CheckoutLine";
    id: string;
    quantity: number;
    totalPrice: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_totalPrice | null;
    variant: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines_variant;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_discount {
    __typename: "Money";
    currency: string;
    amount: number;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_availablePaymentGateways_config {
    __typename: "GatewayConfigLine";
    field: string;
    value: string | null;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_availablePaymentGateways {
    __typename: "PaymentGateway";
    id: string;
    name: string;
    config: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_availablePaymentGateways_config[];
    currencies: (string | null)[];
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout {
    __typename: "Checkout";
    token: any;
    id: string;
    totalPrice: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_totalPrice | null;
    subtotalPrice: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_subtotalPrice | null;
    billingAddress: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_billingAddress | null;
    shippingAddress: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_shippingAddress | null;
    email: string;
    availableShippingMethods: (UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_availableShippingMethods | null)[];
    shippingMethod: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_shippingMethod | null;
    shippingPrice: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_shippingPrice | null;
    lines:
        | (UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_lines | null)[]
        | null;
    isShippingRequired: boolean;
    discount: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_discount | null;
    discountName: string | null;
    translatedDiscountName: string | null;
    voucherCode: string | null;
    availablePaymentGateways: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout_availablePaymentGateways[];
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate {
    __typename: "CheckoutBillingAddressUpdate";
    errors: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_errors[];
    checkout: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate_checkout | null;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_totalPrice_gross {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_totalPrice_net {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_totalPrice {
    __typename: "TaxedMoney";
    gross: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_totalPrice_gross;
    net: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_totalPrice_net;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_subtotalPrice_gross {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_subtotalPrice_net {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_subtotalPrice {
    __typename: "TaxedMoney";
    gross: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_subtotalPrice_gross;
    net: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_subtotalPrice_net;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_billingAddress_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_billingAddress {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_billingAddress_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_shippingAddress_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_shippingAddress {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_shippingAddress_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_availableShippingMethods_price {
    __typename: "Money";
    currency: string;
    amount: number;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_availableShippingMethods {
    __typename: "ShippingMethod";
    id: string;
    name: string;
    price: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_availableShippingMethods_price | null;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_shippingMethod_price {
    __typename: "Money";
    currency: string;
    amount: number;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_shippingMethod {
    __typename: "ShippingMethod";
    id: string;
    name: string;
    price: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_shippingMethod_price | null;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_shippingPrice_gross {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_shippingPrice_net {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_shippingPrice {
    __typename: "TaxedMoney";
    gross: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_shippingPrice_gross;
    net: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_shippingPrice_net;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_totalPrice_gross {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_totalPrice_net {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_totalPrice {
    __typename: "TaxedMoney";
    gross: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_totalPrice_gross;
    net: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_totalPrice_net;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_pricing_priceUndiscounted_gross {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_pricing_priceUndiscounted_net {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_pricing_priceUndiscounted {
    __typename: "TaxedMoney";
    gross: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_pricing_priceUndiscounted_gross;
    net: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_pricing_priceUndiscounted_net;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_pricing_price_gross {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_pricing_price_net {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_pricing_price {
    __typename: "TaxedMoney";
    gross: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_pricing_price_gross;
    net: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_pricing_price_net;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_pricing {
    __typename: "VariantPricingInfo";
    onSale: boolean | null;
    priceUndiscounted: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_pricing_priceUndiscounted | null;
    price: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_pricing_price | null;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_attributes_attribute {
    __typename: "Attribute";
    id: string;
    name: string | null;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_attributes_values {
    __typename: "AttributeValue";
    id: string;
    name: string | null;
    value: string | null;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_attributes {
    __typename: "SelectedAttribute";
    attribute: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_attributes_attribute;
    values: (UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_attributes_values | null)[];
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_product_thumbnail {
    __typename: "Image";
    url: string;
    alt: string | null;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_product_thumbnail2x {
    __typename: "Image";
    url: string;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_product_productType {
    __typename: "ProductType";
    id: string;
    isShippingRequired: boolean;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_product {
    __typename: "Product";
    id: string;
    name: string;
    slug: string;
    thumbnail: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_product_thumbnail | null;
    thumbnail2x: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_product_thumbnail2x | null;
    productType: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_product_productType;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant {
    __typename: "ProductVariant";
    id: string;
    name: string;
    sku: string;
    quantityAvailable: number;
    pricing: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_pricing | null;
    attributes: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_attributes[];
    product: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant_product;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines {
    __typename: "CheckoutLine";
    id: string;
    quantity: number;
    totalPrice: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_totalPrice | null;
    variant: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines_variant;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_discount {
    __typename: "Money";
    currency: string;
    amount: number;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_availablePaymentGateways_config {
    __typename: "GatewayConfigLine";
    field: string;
    value: string | null;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_availablePaymentGateways {
    __typename: "PaymentGateway";
    id: string;
    name: string;
    config: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_availablePaymentGateways_config[];
    currencies: (string | null)[];
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout {
    __typename: "Checkout";
    token: any;
    id: string;
    totalPrice: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_totalPrice | null;
    subtotalPrice: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_subtotalPrice | null;
    billingAddress: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_billingAddress | null;
    shippingAddress: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_shippingAddress | null;
    email: string;
    availableShippingMethods: (UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_availableShippingMethods | null)[];
    shippingMethod: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_shippingMethod | null;
    shippingPrice: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_shippingPrice | null;
    lines: (UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_lines | null)[] | null;
    isShippingRequired: boolean;
    discount: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_discount | null;
    discountName: string | null;
    translatedDiscountName: string | null;
    voucherCode: string | null;
    availablePaymentGateways: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout_availablePaymentGateways[];
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_errors {
    __typename: "CheckoutError";
    code: CheckoutErrorCode;
    field: string | null;
    message: string | null;
}

export interface UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate {
    __typename: "CheckoutEmailUpdate";
    checkout: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_checkout | null;
    errors: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate_errors[];
}

export interface UpdateCheckoutBillingAddressWithEmail {
    checkoutBillingAddressUpdate: UpdateCheckoutBillingAddressWithEmail_checkoutBillingAddressUpdate | null;
    checkoutEmailUpdate: UpdateCheckoutBillingAddressWithEmail_checkoutEmailUpdate | null;
}

export interface UpdateCheckoutBillingAddressWithEmailVariables {
    checkoutId: string;
    billingAddress: AddressInput;
    email: string;
}

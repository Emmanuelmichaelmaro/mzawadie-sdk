/* tslint:disable */

/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.
import {
    CheckoutErrorCode,
    PaymentChargeStatusEnum,
    OrderStatus,
} from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: CompleteCheckout
// ====================================================

export interface CompleteCheckout_checkoutComplete_errors {
    __typename: "CheckoutError";
    code: CheckoutErrorCode;
    field: string | null;
    message: string | null;
}

export interface CompleteCheckout_checkoutComplete_order_shippingAddress_country {
    __typename: "CountryDisplay";
    code: string;
    country: string;
}

export interface CompleteCheckout_checkoutComplete_order_shippingAddress {
    __typename: "Address";
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    country: CompleteCheckout_checkoutComplete_order_shippingAddress_country;
    countryArea: string;
    phone: string | null;
    isDefaultBillingAddress: boolean | null;
    isDefaultShippingAddress: boolean | null;
}

export interface CompleteCheckout_checkoutComplete_order_lines_variant_pricing_priceUndiscounted_gross {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface CompleteCheckout_checkoutComplete_order_lines_variant_pricing_priceUndiscounted_net {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface CompleteCheckout_checkoutComplete_order_lines_variant_pricing_priceUndiscounted {
    __typename: "TaxedMoney";
    gross: CompleteCheckout_checkoutComplete_order_lines_variant_pricing_priceUndiscounted_gross;
    net: CompleteCheckout_checkoutComplete_order_lines_variant_pricing_priceUndiscounted_net;
}

export interface CompleteCheckout_checkoutComplete_order_lines_variant_pricing_price_gross {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface CompleteCheckout_checkoutComplete_order_lines_variant_pricing_price_net {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface CompleteCheckout_checkoutComplete_order_lines_variant_pricing_price {
    __typename: "TaxedMoney";
    gross: CompleteCheckout_checkoutComplete_order_lines_variant_pricing_price_gross;
    net: CompleteCheckout_checkoutComplete_order_lines_variant_pricing_price_net;
}

export interface CompleteCheckout_checkoutComplete_order_lines_variant_pricing {
    __typename: "VariantPricingInfo";
    onSale: boolean | null;
    priceUndiscounted: CompleteCheckout_checkoutComplete_order_lines_variant_pricing_priceUndiscounted | null;
    price: CompleteCheckout_checkoutComplete_order_lines_variant_pricing_price | null;
}

export interface CompleteCheckout_checkoutComplete_order_lines_variant_attributes_attribute {
    __typename: "Attribute";
    id: string;
    name: string | null;
}

export interface CompleteCheckout_checkoutComplete_order_lines_variant_attributes_values {
    __typename: "AttributeValue";
    id: string;
    name: string | null;
    value: string | null;
}

export interface CompleteCheckout_checkoutComplete_order_lines_variant_attributes {
    __typename: "SelectedAttribute";
    attribute: CompleteCheckout_checkoutComplete_order_lines_variant_attributes_attribute;
    values: (CompleteCheckout_checkoutComplete_order_lines_variant_attributes_values | null)[];
}

export interface CompleteCheckout_checkoutComplete_order_lines_variant_product_thumbnail {
    __typename: "Image";
    url: string;
    alt: string | null;
}

export interface CompleteCheckout_checkoutComplete_order_lines_variant_product_thumbnail2x {
    __typename: "Image";
    url: string;
}

export interface CompleteCheckout_checkoutComplete_order_lines_variant_product_productType {
    __typename: "ProductType";
    id: string;
    isShippingRequired: boolean;
}

export interface CompleteCheckout_checkoutComplete_order_lines_variant_product {
    __typename: "Product";
    id: string;
    name: string;
    slug: string;
    thumbnail: CompleteCheckout_checkoutComplete_order_lines_variant_product_thumbnail | null;
    thumbnail2x: CompleteCheckout_checkoutComplete_order_lines_variant_product_thumbnail2x | null;
    productType: CompleteCheckout_checkoutComplete_order_lines_variant_product_productType;
}

export interface CompleteCheckout_checkoutComplete_order_lines_variant {
    __typename: "ProductVariant";
    id: string;
    name: string;
    sku: string;
    quantityAvailable: number;
    pricing: CompleteCheckout_checkoutComplete_order_lines_variant_pricing | null;
    attributes: CompleteCheckout_checkoutComplete_order_lines_variant_attributes[];
    product: CompleteCheckout_checkoutComplete_order_lines_variant_product;
}

export interface CompleteCheckout_checkoutComplete_order_lines_unitPrice_gross {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface CompleteCheckout_checkoutComplete_order_lines_unitPrice_net {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface CompleteCheckout_checkoutComplete_order_lines_unitPrice {
    __typename: "TaxedMoney";
    currency: string;
    gross: CompleteCheckout_checkoutComplete_order_lines_unitPrice_gross;
    net: CompleteCheckout_checkoutComplete_order_lines_unitPrice_net;
}

export interface CompleteCheckout_checkoutComplete_order_lines_totalPrice_gross {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface CompleteCheckout_checkoutComplete_order_lines_totalPrice_net {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface CompleteCheckout_checkoutComplete_order_lines_totalPrice {
    __typename: "TaxedMoney";
    currency: string;
    gross: CompleteCheckout_checkoutComplete_order_lines_totalPrice_gross;
    net: CompleteCheckout_checkoutComplete_order_lines_totalPrice_net;
}

export interface CompleteCheckout_checkoutComplete_order_lines {
    __typename: "OrderLine";
    productName: string;
    quantity: number;
    variant: CompleteCheckout_checkoutComplete_order_lines_variant | null;
    unitPrice: CompleteCheckout_checkoutComplete_order_lines_unitPrice;
    totalPrice: CompleteCheckout_checkoutComplete_order_lines_totalPrice;
}

export interface CompleteCheckout_checkoutComplete_order_subtotal_gross {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface CompleteCheckout_checkoutComplete_order_subtotal_net {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface CompleteCheckout_checkoutComplete_order_subtotal {
    __typename: "TaxedMoney";
    gross: CompleteCheckout_checkoutComplete_order_subtotal_gross;
    net: CompleteCheckout_checkoutComplete_order_subtotal_net;
}

export interface CompleteCheckout_checkoutComplete_order_total_gross {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface CompleteCheckout_checkoutComplete_order_total_net {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface CompleteCheckout_checkoutComplete_order_total {
    __typename: "TaxedMoney";
    gross: CompleteCheckout_checkoutComplete_order_total_gross;
    net: CompleteCheckout_checkoutComplete_order_total_net;
}

export interface CompleteCheckout_checkoutComplete_order_shippingPrice_gross {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface CompleteCheckout_checkoutComplete_order_shippingPrice_net {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface CompleteCheckout_checkoutComplete_order_shippingPrice {
    __typename: "TaxedMoney";
    gross: CompleteCheckout_checkoutComplete_order_shippingPrice_gross;
    net: CompleteCheckout_checkoutComplete_order_shippingPrice_net;
}

export interface CompleteCheckout_checkoutComplete_order {
    __typename: "Order";
    userEmail: string | null;
    paymentStatus: PaymentChargeStatusEnum;
    paymentStatusDisplay: string;
    status: OrderStatus;
    statusDisplay: string | null;
    id: string;
    token: string;
    number: string | null;
    shippingAddress: CompleteCheckout_checkoutComplete_order_shippingAddress | null;
    lines: (CompleteCheckout_checkoutComplete_order_lines | null)[];
    subtotal: CompleteCheckout_checkoutComplete_order_subtotal;
    total: CompleteCheckout_checkoutComplete_order_total;
    shippingPrice: CompleteCheckout_checkoutComplete_order_shippingPrice;
}

export interface CompleteCheckout_checkoutComplete {
    __typename: "CheckoutComplete";
    errors: CompleteCheckout_checkoutComplete_errors[];
    order: CompleteCheckout_checkoutComplete_order | null;
    confirmationNeeded: boolean;
    confirmationData: any | null;
}

export interface CompleteCheckout {
    checkoutComplete: CompleteCheckout_checkoutComplete | null;
}

export interface CompleteCheckoutVariables {
    checkoutId: string;
    paymentData?: any | null;
    redirectUrl?: string | null;
    storeSource?: boolean | null;
}

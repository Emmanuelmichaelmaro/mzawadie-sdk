/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CheckoutLine
// ====================================================

export interface CheckoutLine_totalPrice_gross {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface CheckoutLine_totalPrice_net {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface CheckoutLine_totalPrice {
    __typename: "TaxedMoney";
    gross: CheckoutLine_totalPrice_gross;
    net: CheckoutLine_totalPrice_net;
}

export interface CheckoutLine_variant_pricing_priceUndiscounted_gross {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface CheckoutLine_variant_pricing_priceUndiscounted_net {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface CheckoutLine_variant_pricing_priceUndiscounted {
    __typename: "TaxedMoney";
    gross: CheckoutLine_variant_pricing_priceUndiscounted_gross;
    net: CheckoutLine_variant_pricing_priceUndiscounted_net;
}

export interface CheckoutLine_variant_pricing_price_gross {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface CheckoutLine_variant_pricing_price_net {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface CheckoutLine_variant_pricing_price {
    __typename: "TaxedMoney";
    gross: CheckoutLine_variant_pricing_price_gross;
    net: CheckoutLine_variant_pricing_price_net;
}

export interface CheckoutLine_variant_pricing {
    __typename: "VariantPricingInfo";
    onSale: boolean | null;
    priceUndiscounted: CheckoutLine_variant_pricing_priceUndiscounted | null;
    price: CheckoutLine_variant_pricing_price | null;
}

export interface CheckoutLine_variant_attributes_attribute {
    __typename: "Attribute";
    id: string;
    name: string | null;
}

export interface CheckoutLine_variant_attributes_values {
    __typename: "AttributeValue";
    id: string;
    name: string | null;
    value: string | null;
}

export interface CheckoutLine_variant_attributes {
    __typename: "SelectedAttribute";
    attribute: CheckoutLine_variant_attributes_attribute;
    values: (CheckoutLine_variant_attributes_values | null)[];
}

export interface CheckoutLine_variant_product_thumbnail {
    __typename: "Image";
    url: string;
    alt: string | null;
}

export interface CheckoutLine_variant_product_thumbnail2x {
    __typename: "Image";
    url: string;
}

export interface CheckoutLine_variant_product_productType {
    __typename: "ProductType";
    id: string;
    isShippingRequired: boolean;
}

export interface CheckoutLine_variant_product {
    __typename: "Product";
    id: string;
    name: string;
    slug: string;
    thumbnail: CheckoutLine_variant_product_thumbnail | null;
    thumbnail2x: CheckoutLine_variant_product_thumbnail2x | null;
    productType: CheckoutLine_variant_product_productType;
}

export interface CheckoutLine_variant {
    __typename: "ProductVariant";
    id: string;
    name: string;
    sku: string;
    quantityAvailable: number;
    pricing: CheckoutLine_variant_pricing | null;
    attributes: CheckoutLine_variant_attributes[];
    product: CheckoutLine_variant_product;
}

export interface CheckoutLine {
    __typename: "CheckoutLine";
    id: string;
    quantity: number;
    totalPrice: CheckoutLine_totalPrice | null;
    variant: CheckoutLine_variant;
}

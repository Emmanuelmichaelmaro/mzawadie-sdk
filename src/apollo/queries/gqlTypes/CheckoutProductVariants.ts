/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CheckoutProductVariants
// ====================================================

export interface CheckoutProductVariants_productVariants_edges_node_pricing_priceUndiscounted_gross {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface CheckoutProductVariants_productVariants_edges_node_pricing_priceUndiscounted_net {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface CheckoutProductVariants_productVariants_edges_node_pricing_priceUndiscounted {
    __typename: "TaxedMoney";
    gross: CheckoutProductVariants_productVariants_edges_node_pricing_priceUndiscounted_gross;
    net: CheckoutProductVariants_productVariants_edges_node_pricing_priceUndiscounted_net;
}

export interface CheckoutProductVariants_productVariants_edges_node_pricing_price_gross {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface CheckoutProductVariants_productVariants_edges_node_pricing_price_net {
    __typename: "Money";
    amount: number;
    currency: string;
}

export interface CheckoutProductVariants_productVariants_edges_node_pricing_price {
    __typename: "TaxedMoney";
    gross: CheckoutProductVariants_productVariants_edges_node_pricing_price_gross;
    net: CheckoutProductVariants_productVariants_edges_node_pricing_price_net;
}

export interface CheckoutProductVariants_productVariants_edges_node_pricing {
    __typename: "VariantPricingInfo";
    onSale: boolean | null;
    priceUndiscounted: CheckoutProductVariants_productVariants_edges_node_pricing_priceUndiscounted | null;
    price: CheckoutProductVariants_productVariants_edges_node_pricing_price | null;
}

export interface CheckoutProductVariants_productVariants_edges_node_attributes_attribute {
    __typename: "Attribute";
    id: string;
    name: string | null;
}

export interface CheckoutProductVariants_productVariants_edges_node_attributes_values {
    __typename: "AttributeValue";
    id: string;
    name: string | null;
    value: string | null;
}

export interface CheckoutProductVariants_productVariants_edges_node_attributes {
    __typename: "SelectedAttribute";
    attribute: CheckoutProductVariants_productVariants_edges_node_attributes_attribute;
    values: (CheckoutProductVariants_productVariants_edges_node_attributes_values | null)[];
}

export interface CheckoutProductVariants_productVariants_edges_node_product_thumbnail {
    __typename: "Image";
    url: string;
    alt: string | null;
}

export interface CheckoutProductVariants_productVariants_edges_node_product_thumbnail2x {
    __typename: "Image";
    url: string;
}

export interface CheckoutProductVariants_productVariants_edges_node_product_productType {
    __typename: "ProductType";
    id: string;
    isShippingRequired: boolean;
}

export interface CheckoutProductVariants_productVariants_edges_node_product {
    __typename: "Product";
    id: string;
    name: string;
    slug: string;
    thumbnail: CheckoutProductVariants_productVariants_edges_node_product_thumbnail | null;
    thumbnail2x: CheckoutProductVariants_productVariants_edges_node_product_thumbnail2x | null;
    productType: CheckoutProductVariants_productVariants_edges_node_product_productType;
}

export interface CheckoutProductVariants_productVariants_edges_node {
    __typename: "ProductVariant";
    id: string;
    name: string;
    sku: string;
    quantityAvailable: number;
    pricing: CheckoutProductVariants_productVariants_edges_node_pricing | null;
    attributes: CheckoutProductVariants_productVariants_edges_node_attributes[];
    product: CheckoutProductVariants_productVariants_edges_node_product;
}

export interface CheckoutProductVariants_productVariants_edges {
    __typename: "ProductVariantCountableEdge";
    node: CheckoutProductVariants_productVariants_edges_node;
}

export interface CheckoutProductVariants_productVariants {
    __typename: "ProductVariantCountableConnection";
    edges: CheckoutProductVariants_productVariants_edges[];
}

export interface CheckoutProductVariants {
    productVariants: CheckoutProductVariants_productVariants | null;
}

export interface CheckoutProductVariantsVariables {
    ids?: (string | null)[] | null;
    channel?: string | null;
}

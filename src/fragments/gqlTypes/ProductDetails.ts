/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL fragment: ProductDetails
// ====================================================


export interface ProductDetails_thumbnail {
  __typename: "Image";
  url: string;
  alt: string | null;
}

export interface ProductDetails_thumbnail2x {
  __typename: "Image";
  url: string;
}

export interface ProductDetails_pricing_priceRangeUndiscounted_start_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductDetails_pricing_priceRangeUndiscounted_start_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductDetails_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  gross: ProductDetails_pricing_priceRangeUndiscounted_start_gross;
  net: ProductDetails_pricing_priceRangeUndiscounted_start_net;
}

export interface ProductDetails_pricing_priceRangeUndiscounted_stop_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductDetails_pricing_priceRangeUndiscounted_stop_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductDetails_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  gross: ProductDetails_pricing_priceRangeUndiscounted_stop_gross;
  net: ProductDetails_pricing_priceRangeUndiscounted_stop_net;
}

export interface ProductDetails_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  start: ProductDetails_pricing_priceRangeUndiscounted_start | null;
  stop: ProductDetails_pricing_priceRangeUndiscounted_stop | null;
}

export interface ProductDetails_pricing_priceRange_start_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductDetails_pricing_priceRange_start_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductDetails_pricing_priceRange_start {
  __typename: "TaxedMoney";
  gross: ProductDetails_pricing_priceRange_start_gross;
  net: ProductDetails_pricing_priceRange_start_net;
}

export interface ProductDetails_pricing_priceRange_stop_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductDetails_pricing_priceRange_stop_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductDetails_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  gross: ProductDetails_pricing_priceRange_stop_gross;
  net: ProductDetails_pricing_priceRange_stop_net;
}

export interface ProductDetails_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  start: ProductDetails_pricing_priceRange_start | null;
  stop: ProductDetails_pricing_priceRange_stop | null;
}

export interface ProductDetails_pricing {
  __typename: "ProductPricingInfo";
  onSale: boolean | null;
  priceRangeUndiscounted: ProductDetails_pricing_priceRangeUndiscounted | null;
  priceRange: ProductDetails_pricing_priceRange | null;
}

export interface ProductDetails_category_products_edges_node_thumbnail {
  __typename: "Image";
  url: string;
  alt: string | null;
}

export interface ProductDetails_category_products_edges_node_thumbnail2x {
  __typename: "Image";
  url: string;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_start_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_start_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  gross: ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_start_gross;
  net: ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_start_net;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_stop_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_stop_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  gross: ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_stop_gross;
  net: ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_stop_net;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  start: ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_start | null;
  stop: ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_stop | null;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRange_start_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRange_start_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRange_start {
  __typename: "TaxedMoney";
  gross: ProductDetails_category_products_edges_node_pricing_priceRange_start_gross;
  net: ProductDetails_category_products_edges_node_pricing_priceRange_start_net;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRange_stop_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRange_stop_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  gross: ProductDetails_category_products_edges_node_pricing_priceRange_stop_gross;
  net: ProductDetails_category_products_edges_node_pricing_priceRange_stop_net;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  start: ProductDetails_category_products_edges_node_pricing_priceRange_start | null;
  stop: ProductDetails_category_products_edges_node_pricing_priceRange_stop | null;
}

export interface ProductDetails_category_products_edges_node_pricing {
  __typename: "ProductPricingInfo";
  onSale: boolean | null;
  priceRangeUndiscounted: ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted | null;
  priceRange: ProductDetails_category_products_edges_node_pricing_priceRange | null;
}

export interface ProductDetails_category_products_edges_node_category {
  __typename: "Category";
  id: string;
  name: string;
  slug: string;
}

export interface ProductDetails_category_products_edges_node {
  __typename: "Product";
  id: string;
  name: string;
  slug: string;
  seoDescription: string | null;
  isAvailableForPurchase: boolean | null;
  availableForPurchase: any | null;
  seoTitle: string | null;
  thumbnail: ProductDetails_category_products_edges_node_thumbnail | null;
  thumbnail2x: ProductDetails_category_products_edges_node_thumbnail2x | null;
  pricing: ProductDetails_category_products_edges_node_pricing | null;
  category: ProductDetails_category_products_edges_node_category | null;
}

export interface ProductDetails_category_products_edges {
  __typename: "ProductCountableEdge";
  node: ProductDetails_category_products_edges_node;
}

export interface ProductDetails_category_products {
  __typename: "ProductCountableConnection";
  edges: ProductDetails_category_products_edges[];
}

export interface ProductDetails_category {
  __typename: "Category";
  id: string;
  name: string;
  slug: string;
  products: ProductDetails_category_products | null;
}

export interface ProductDetails_images {
  __typename: "ProductImage";
  id: string;
  url: string;
}

export interface ProductDetails_attributes_attribute {
  __typename: "Attribute";
  id: string;
  name: string | null;
  slug: string | null;
}

export interface ProductDetails_attributes_values {
  __typename: "AttributeValue";
  id: string;
  name: string | null;
}

export interface ProductDetails_attributes {
  __typename: "SelectedAttribute";
  attribute: ProductDetails_attributes_attribute;
  values: (ProductDetails_attributes_values | null)[];
}

export interface ProductDetails_variants_images {
  __typename: "ProductImage";
  id: string;
  url: string;
  alt: string | null;
}

export interface ProductDetails_variants_pricing_priceUndiscounted_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductDetails_variants_pricing_priceUndiscounted_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductDetails_variants_pricing_priceUndiscounted {
  __typename: "TaxedMoney";
  gross: ProductDetails_variants_pricing_priceUndiscounted_gross;
  net: ProductDetails_variants_pricing_priceUndiscounted_net;
}

export interface ProductDetails_variants_pricing_price_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductDetails_variants_pricing_price_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductDetails_variants_pricing_price {
  __typename: "TaxedMoney";
  gross: ProductDetails_variants_pricing_price_gross;
  net: ProductDetails_variants_pricing_price_net;
}

export interface ProductDetails_variants_pricing {
  __typename: "VariantPricingInfo";
  onSale: boolean | null;
  priceUndiscounted: ProductDetails_variants_pricing_priceUndiscounted | null;
  price: ProductDetails_variants_pricing_price | null;
}

export interface ProductDetails_variants_attributes_attribute {
  __typename: "Attribute";
  id: string;
  name: string | null;
  slug: string | null;
}

export interface ProductDetails_variants_attributes_values {
  __typename: "AttributeValue";
  id: string;
  name: string | null;
  value: string | null;
}

export interface ProductDetails_variants_attributes {
  __typename: "SelectedAttribute";
  attribute: ProductDetails_variants_attributes_attribute;
  values: (ProductDetails_variants_attributes_values | null)[];
}

export interface ProductDetails_variants {
  __typename: "ProductVariant";
  id: string;
  sku: string;
  name: string;
  quantityAvailable: number;
  images: (ProductDetails_variants_images | null)[] | null;
  pricing: ProductDetails_variants_pricing | null;
  attributes: ProductDetails_variants_attributes[];
}

export interface ProductDetails {
  __typename: "Product";
  id: string;
  name: string;
  slug: string;
  seoDescription: string | null;
  isAvailableForPurchase: boolean | null;
  availableForPurchase: any | null;
  seoTitle: string | null;
  thumbnail: ProductDetails_thumbnail | null;
  thumbnail2x: ProductDetails_thumbnail2x | null;
  pricing: ProductDetails_pricing | null;
  description: any | null;
  category: ProductDetails_category | null;
  images: (ProductDetails_images | null)[] | null;
  attributes: ProductDetails_attributes[];
  variants: (ProductDetails_variants | null)[] | null;
  isAvailable: boolean | null;
}

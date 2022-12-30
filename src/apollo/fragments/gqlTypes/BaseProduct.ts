/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BaseProduct
// ====================================================

export interface BaseProduct_thumbnail {
    __typename: "Image";
    url: string;
    alt: string | null;
}

export interface BaseProduct_thumbnail2x {
    __typename: "Image";
    url: string;
}

export interface BaseProduct {
    __typename: "Product";
    id: string;
    name: string;
    slug: string;
    seoDescription: string | null;
    isAvailableForPurchase: boolean | null;
    availableForPurchase: any | null;
    seoTitle: string | null;
    thumbnail: BaseProduct_thumbnail | null;
    thumbnail2x: BaseProduct_thumbnail2x | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CategoryDetails
// ====================================================

export interface CategoryDetails_backgroundImage {
    __typename: "Image";
    alt: string | null;
    url: string;
}

export interface CategoryDetails {
    __typename: "Category";
    id: string;
    name: string;
    slug: string;
    seoDescription: string | null;
    seoTitle: string | null;
    backgroundImage: CategoryDetails_backgroundImage | null;
    description: any | null;
}

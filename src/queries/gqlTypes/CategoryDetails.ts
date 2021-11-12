/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: CategoryDetails
// ====================================================


export interface CategoryDetails_category_backgroundImage {
  __typename: "Image";
  alt: string | null;
  url: string;
}

export interface CategoryDetails_category {
  __typename: "Category";
  id: string;
  name: string;
  slug: string;
  seoDescription: string | null;
  seoTitle: string | null;
  backgroundImage: CategoryDetails_category_backgroundImage | null;
  description: any | null;
}

export interface CategoryDetails {
  category: CategoryDetails_category | null;
}

export interface CategoryDetailsVariables {
  id?: string | null;
  slug?: string | null;
}

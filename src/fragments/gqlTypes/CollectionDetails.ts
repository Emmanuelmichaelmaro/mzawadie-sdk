/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL fragment: CollectionDetails
// ====================================================


export interface CollectionDetails_backgroundImage {
  __typename: "Image";
  alt: string | null;
  url: string;
}

export interface CollectionDetails {
  __typename: "Collection";
  id: string;
  name: string;
  slug: string;
  seoDescription: string | null;
  seoTitle: string | null;
  backgroundImage: CollectionDetails_backgroundImage | null;
  description: any | null;
}

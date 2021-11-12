/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: CollectionDetails
// ====================================================


export interface CollectionDetails_collection_backgroundImage {
  __typename: "Image";
  alt: string | null;
  url: string;
}

export interface CollectionDetails_collection {
  __typename: "Collection";
  id: string;
  name: string;
  slug: string;
  seoDescription: string | null;
  seoTitle: string | null;
  backgroundImage: CollectionDetails_collection_backgroundImage | null;
  description: any | null;
}

export interface CollectionDetails {
  collection: CollectionDetails_collection | null;
}

export interface CollectionDetailsVariables {
  id?: string | null;
  slug?: string | null;
  channel?: string | null;
}

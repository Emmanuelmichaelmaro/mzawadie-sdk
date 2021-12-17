/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


import { CollectionSortingInput, CollectionFilterInput } from "./../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL query operation: CollectionList
// ====================================================


export interface CollectionList_collections_edges_node {
  __typename: "Collection";
  id: string;
  name: string;
  slug: string;
  seoDescription: string | null;
  seoTitle: string | null;
}

export interface CollectionList_collections_edges {
  __typename: "CollectionCountableEdge";
  node: CollectionList_collections_edges_node;
}

export interface CollectionList_collections_pageInfo {
  __typename: "PageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface CollectionList_collections {
  __typename: "CollectionCountableConnection";
  edges: CollectionList_collections_edges[];
  pageInfo: CollectionList_collections_pageInfo;
  totalCount: number | null;
}

export interface CollectionList {
  collections: CollectionList_collections | null;
}

export interface CollectionListVariables {
  first: number;
  after?: string | null;
  sortBy?: CollectionSortingInput | null;
  filter?: CollectionFilterInput | null;
  channel?: string | null;
}

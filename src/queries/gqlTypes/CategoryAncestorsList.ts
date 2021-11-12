/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: CategoryAncestorsList
// ====================================================


export interface CategoryAncestorsList_category_ancestors_edges_node {
  __typename: "Category";
  id: string;
  name: string;
  slug: string;
  seoDescription: string | null;
  seoTitle: string | null;
}

export interface CategoryAncestorsList_category_ancestors_edges {
  __typename: "CategoryCountableEdge";
  node: CategoryAncestorsList_category_ancestors_edges_node;
}

export interface CategoryAncestorsList_category_ancestors_pageInfo {
  __typename: "PageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface CategoryAncestorsList_category_ancestors {
  __typename: "CategoryCountableConnection";
  edges: CategoryAncestorsList_category_ancestors_edges[];
  totalCount: number | null;
  pageInfo: CategoryAncestorsList_category_ancestors_pageInfo;
}

export interface CategoryAncestorsList_category {
  __typename: "Category";
  id: string;
  ancestors: CategoryAncestorsList_category_ancestors | null;
}

export interface CategoryAncestorsList {
  category: CategoryAncestorsList_category | null;
}

export interface CategoryAncestorsListVariables {
  id: string;
  first: number;
  after?: string | null;
}

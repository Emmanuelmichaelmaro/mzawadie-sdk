/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CategoryList
// ====================================================

export interface CategoryList_categories_edges_node {
    __typename: "Category";
    id: string;
    name: string;
    slug: string;
    seoDescription: string | null;
    seoTitle: string | null;
}

export interface CategoryList_categories_edges {
    __typename: "CategoryCountableEdge";
    node: CategoryList_categories_edges_node;
}

export interface CategoryList_categories_pageInfo {
    __typename: "PageInfo";
    endCursor: string | null;
    hasNextPage: boolean;
}

export interface CategoryList_categories {
    __typename: "CategoryCountableConnection";
    edges: CategoryList_categories_edges[];
    totalCount: number | null;
    pageInfo: CategoryList_categories_pageInfo;
}

export interface CategoryList {
    categories: CategoryList_categories | null;
}

export interface CategoryListVariables {
    first: number;
    after?: string | null;
}

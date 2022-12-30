/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CategoryChildrenList
// ====================================================

export interface CategoryChildrenList_category_children_edges_node {
    __typename: "Category";
    id: string;
    name: string;
    slug: string;
    seoDescription: string | null;
    seoTitle: string | null;
}

export interface CategoryChildrenList_category_children_edges {
    __typename: "CategoryCountableEdge";
    node: CategoryChildrenList_category_children_edges_node;
}

export interface CategoryChildrenList_category_children_pageInfo {
    __typename: "PageInfo";
    endCursor: string | null;
    hasNextPage: boolean;
}

export interface CategoryChildrenList_category_children {
    __typename: "CategoryCountableConnection";
    edges: CategoryChildrenList_category_children_edges[];
    totalCount: number | null;
    pageInfo: CategoryChildrenList_category_children_pageInfo;
}

export interface CategoryChildrenList_category {
    __typename: "Category";
    id: string;
    children: CategoryChildrenList_category_children | null;
}

export interface CategoryChildrenList {
    category: CategoryChildrenList_category | null;
}

export interface CategoryChildrenListVariables {
    id: string;
    first: number;
    after?: string | null;
}

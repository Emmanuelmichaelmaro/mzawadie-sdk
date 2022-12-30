import { gql } from "@apollo/client";

import { baseCategoryFragment, categoryFragment } from "../fragments/categories";
import { pageInfoFragment } from "../fragments/pageInfo";

export const categoryList = gql`
    ${baseCategoryFragment}
    ${pageInfoFragment}
    query CategoryList($first: Int!, $after: String) {
        categories(first: $first, after: $after) {
            edges {
                node {
                    ...BaseCategory
                }
            }
            totalCount
            pageInfo {
                ...PageInfo
            }
        }
    }
`;

export const categoryChildrenList = gql`
    ${baseCategoryFragment}
    ${pageInfoFragment}
    query CategoryChildrenList($id: ID!, $first: Int!, $after: String) {
        category(id: $id) {
            id
            children(first: $first, after: $after) {
                edges {
                    node {
                        ...BaseCategory
                    }
                }
                totalCount
                pageInfo {
                    ...PageInfo
                }
            }
        }
    }
`;

export const categoryAncestorsList = gql`
    ${baseCategoryFragment}
    ${pageInfoFragment}
    query CategoryAncestorsList($id: ID!, $first: Int!, $after: String) {
        category(id: $id) {
            id
            ancestors(first: $first, after: $after) {
                edges {
                    node {
                        ...BaseCategory
                    }
                }
                totalCount
                pageInfo {
                    ...PageInfo
                }
            }
        }
    }
`;

export const categoryDetails = gql`
    ${categoryFragment}
    query CategoryDetails($id: ID, $slug: String) {
        category(id: $id, slug: $slug) {
            ...CategoryDetails
        }
    }
`;

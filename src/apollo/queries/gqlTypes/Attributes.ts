/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Attributes
// ====================================================

export interface Attributes_attributes_edges_node_choices_edges_node {
    __typename: "AttributeValue";
    id: string;
    name: string | null;
    slug: string | null;
}

export interface Attributes_attributes_edges_node_choices_edges {
    __typename: "AttributeValueCountableEdge";
    node: Attributes_attributes_edges_node_choices_edges_node;
}

export interface Attributes_attributes_edges_node_choices {
    __typename: "AttributeValueCountableConnection";
    edges: Attributes_attributes_edges_node_choices_edges[];
}

export interface Attributes_attributes_edges_node {
    __typename: "Attribute";
    id: string;
    name: string | null;
    slug: string | null;
    choices: Attributes_attributes_edges_node_choices | null;
}

export interface Attributes_attributes_edges {
    __typename: "AttributeCountableEdge";
    node: Attributes_attributes_edges_node;
}

export interface Attributes_attributes {
    __typename: "AttributeCountableConnection";
    edges: Attributes_attributes_edges[];
}

export interface Attributes {
    attributes: Attributes_attributes | null;
}

export interface AttributesVariables {
    id: string;
    channel?: string | null;
}

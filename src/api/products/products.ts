import { ApolloClient } from "@apollo/client";

import { Config } from "../../apollo";
import { ProductDetails as ProductDetailsFragment } from "../../apollo/fragments/gqlTypes/ProductDetails";
import {
    ProductDetails as ProductDetailsQuery,
    ProductDetailsVariables,
} from "../../apollo/queries/gqlTypes/ProductDetails";
import {
    ProductList as ProductListQuery,
    ProductList_products_edges_node,
    ProductListVariables,
} from "../../apollo/queries/gqlTypes/ProductList";
import { WithDetails, WithList } from "../types";
import { ProductDetails } from "./ProductDetails";
import { ProductList } from "./ProductList";

export class ProductsAPI
    implements
        WithDetails<ProductDetailsQuery, ProductDetailsFragment, ProductDetailsVariables>,
        WithList<ProductListQuery, ProductList_products_edges_node, ProductListVariables>
{
    private client: ApolloClient<any>;

    // temporary solution, might change in future
    private config: Config;

    constructor(client: ApolloClient<any>, config: Config) {
        this.client = client;
        this.config = config;
    }

    /**
     * Method returning product details
     * @param variables Details parameters
     */
    getDetails = async (variables: ProductDetailsVariables) => {
        const details = new ProductDetails(this.client);

        await details.init({ channel: this.config.channel, ...variables });

        return details;
    };

    /**
     * Method returning list of products with ability to request next page
     * @param variables List parameters
     */
    getList = async (variables: ProductListVariables) => {
        const list = new ProductList(this.client);

        await list.init({ channel: this.config.channel, ...variables });

        return list;
    };
}

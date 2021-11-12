import { ApolloClient } from "@apollo/client";

import { ProductDetails } from "../../api/products/ProductDetails";
import { ProductList } from "../../api/products/ProductList";
import { makeDetails, makeList } from "./utils";

export const useProductList = makeList((client: ApolloClient<any>) => new ProductList(client));

export const useProductDetails = makeDetails((client: ApolloClient<any>) => new ProductDetails(client));

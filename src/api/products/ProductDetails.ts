import { ProductDetails as Product } from "../../apollo/fragments/gqlTypes/ProductDetails";
import {
    ProductDetails as ProductDetailsQuery,
    ProductDetailsVariables,
} from "../../apollo/queries/gqlTypes/ProductDetails";
import { productDetails } from "../../apollo/queries/products";
import BaseDetails, { MapQueryData } from "../../helpers/BaseDetails";

export class ProductDetails extends BaseDetails<ProductDetailsQuery, Product, ProductDetailsVariables> {
    mapQueryData: MapQueryData<ProductDetailsQuery, Product> = (data) => data.product || undefined;

    query = (variables: ProductDetailsVariables) =>
        this.client!.query<ProductDetailsQuery, ProductDetailsVariables>({
            query: productDetails,
            variables,
        });
}

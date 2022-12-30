import { CategoryDetails as Category } from "../../apollo/fragments/gqlTypes/CategoryDetails";
import { categoryDetails } from "../../apollo/queries/category";
import {
    CategoryDetails as CategoryDetailsQuery,
    CategoryDetailsVariables,
} from "../../apollo/queries/gqlTypes/CategoryDetails";
import BaseDetails, { MapQueryData } from "../../helpers/BaseDetails";

export class CategoryDetails extends BaseDetails<
    CategoryDetailsQuery,
    Category,
    CategoryDetailsVariables
> {
    mapQueryData: MapQueryData<CategoryDetailsQuery, Category> = (data) => data.category || undefined;

    query = (variables: CategoryDetailsVariables) =>
        this.client!.query<CategoryDetailsQuery, CategoryDetailsVariables>({
            query: categoryDetails,
            variables,
        });
}

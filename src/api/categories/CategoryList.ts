import { BaseCategory } from "../../apollo/fragments/gqlTypes/BaseCategory";
import { categoryList } from "../../apollo/queries/category";
import {
    CategoryList as CategoryListQuery,
    CategoryListVariables,
} from "../../apollo/queries/gqlTypes/CategoryList";
import BaseList, { GetPageInfo, GetTotalCount, MapQueryData } from "../../helpers/BaseList";

export class CategoryList extends BaseList<CategoryListQuery, BaseCategory, CategoryListVariables> {
    getPageInfo: GetPageInfo<CategoryListQuery> = (result) => result.data.categories?.pageInfo!;

    getTotalCount: GetTotalCount<CategoryListQuery> = (result) => result.data.categories?.totalCount!;

    mapQueryData: MapQueryData<CategoryListQuery, BaseCategory> = (data) =>
        data.categories?.edges.map(({ node }) => node);

    query = (variables: CategoryListVariables) =>
        this.client!.query<CategoryListQuery, CategoryListVariables>({
            query: categoryList,
            variables,
        });
}

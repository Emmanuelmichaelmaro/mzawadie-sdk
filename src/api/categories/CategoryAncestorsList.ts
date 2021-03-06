import { BaseCategory } from "../../fragments/gqlTypes/BaseCategory";
import BaseList, { GetPageInfo, GetTotalCount, MapQueryData } from "../../helpers/BaseList";
import { categoryAncestorsList } from "../../queries/category";
import {
    CategoryAncestorsList as CategoryAncestorsListQuery,
    CategoryAncestorsListVariables,
} from "../../queries/gqlTypes/CategoryAncestorsList";

export class CategoryAncestorsList extends BaseList<
    CategoryAncestorsListQuery,
    BaseCategory,
    CategoryAncestorsListVariables
> {
    getPageInfo: GetPageInfo<CategoryAncestorsListQuery> = (result) =>
        result.data.category?.ancestors?.pageInfo!;

    getTotalCount: GetTotalCount<CategoryAncestorsListQuery> = (result) =>
        result.data.category?.ancestors?.totalCount!;

    mapQueryData: MapQueryData<CategoryAncestorsListQuery, BaseCategory> = (data) =>
        data.category?.ancestors?.edges.map(({ node }) => node);

    query = (variables: CategoryAncestorsListVariables) =>
        this.client!.query<CategoryAncestorsListQuery, CategoryAncestorsListVariables>({
            query: categoryAncestorsList,
            variables,
        });
}

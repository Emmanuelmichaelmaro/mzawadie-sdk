import { ApolloClient } from "@apollo/client";

import { CategoryAncestorsList } from "../../api/categories/CategoryAncestorsList";
import { CategoryChildrenList } from "../../api/categories/CategoryChildrenList";
import { CategoryDetails } from "../../api/categories/CategoryDetails";
import { CategoryList } from "../../api/categories/CategoryList";
import { makeDetails, makeList } from "./utils";

export const useCategoryList = makeList((client: ApolloClient<any>) => new CategoryList(client));

export const useCategoryAncestorsList = makeList(
    (client: ApolloClient<any>) => new CategoryAncestorsList(client)
);

export const useCategoryChildrenList = makeList(
    (client: ApolloClient<any>) => new CategoryChildrenList(client)
);

export const useCategoryDetails = makeDetails(
    (client: ApolloClient<any>) => new CategoryDetails(client)
);

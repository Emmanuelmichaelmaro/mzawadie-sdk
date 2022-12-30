import { queryFactory, queryWithVariablesFactory } from "./useQuery";

export const useShopDetails = queryFactory("getShopDetails");

export const useOrderDetails = queryWithVariablesFactory("getOrderDetails");
export const useOrdersByUser = queryWithVariablesFactory("getOrdersByUser");

export const useAttributes = queryWithVariablesFactory("getAttributes");

export const useVariantsProducts = queryWithVariablesFactory("getVariantsProducts");

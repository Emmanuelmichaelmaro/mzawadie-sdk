import { ApolloClient } from "@apollo/client";

import { CollectionDetails } from "../../api/collections/CollectionDetails";
import { CollectionList } from "../../api/collections/CollectionList";
import { makeDetails, makeList } from "./utils";

export const useCollectionList = makeList((client: ApolloClient<any>) => new CollectionList(client));

export const useCollectionDetails = makeDetails(
    (client: ApolloClient<any>) => new CollectionDetails(client)
);

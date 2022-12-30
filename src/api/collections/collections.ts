import { ApolloClient } from "@apollo/client";

import { ConfigInput } from "../../apollo";
import { BaseCollection } from "../../apollo/fragments/gqlTypes/BaseCollection";
import { CollectionDetails as CollectionDetailsFragment } from "../../apollo/fragments/gqlTypes/CollectionDetails";
import {
    CollectionDetails as CollectionDetailsQuery,
    CollectionDetailsVariables,
} from "../../apollo/queries/gqlTypes/CollectionDetails";
import {
    CollectionList as CollectionListQuery,
    CollectionListVariables,
} from "../../apollo/queries/gqlTypes/CollectionList";
import { WithDetails, WithList } from "../types";
import { CollectionDetails } from "./CollectionDetails";
import { CollectionList } from "./CollectionList";

export class CollectionsAPI
    implements
        WithDetails<CollectionDetailsQuery, CollectionDetailsFragment, CollectionDetailsVariables>,
        WithList<CollectionListQuery, BaseCollection, CollectionListVariables>
{
    private client: ApolloClient<any>;

    // temporary solution, might change in future
    private config: ConfigInput;

    constructor(client: ApolloClient<any>, config: ConfigInput) {
        this.client = client;
        this.config = config;
    }

    /**
     * Method returning collection details
     * @param variables Details parameters
     */
    getDetails = async (variables: CollectionDetailsVariables) => {
        const details = new CollectionDetails(this.client);

        await details.init({ channel: this.config.channel, ...variables });

        return details;
    };

    /**
     * Method returning list of collections with ability to request next page
     * @param params List parameters
     */
    getList = async (variables: CollectionListVariables) => {
        const list = new CollectionList(this.client);

        await list.init({ channel: this.config.channel, ...variables });

        return list;
    };
}

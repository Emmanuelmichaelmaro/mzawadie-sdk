import { CollectionDetails as Collection } from "../../apollo/fragments/gqlTypes/CollectionDetails";
import { collectionDetails } from "../../apollo/queries/collections";
import {
    CollectionDetails as CollectionDetailsQuery,
    CollectionDetailsVariables,
} from "../../apollo/queries/gqlTypes/CollectionDetails";
import BaseDetails, { MapQueryData } from "../../helpers/BaseDetails";

export class CollectionDetails extends BaseDetails<
    CollectionDetailsQuery,
    Collection,
    CollectionDetailsVariables
> {
    mapQueryData: MapQueryData<CollectionDetailsQuery, Collection> = (data) =>
        data.collection || undefined;

    query = (variables: CollectionDetailsVariables) =>
        this.client!.query<CollectionDetailsQuery, CollectionDetailsVariables>({
            query: collectionDetails,
            variables,
        });
}

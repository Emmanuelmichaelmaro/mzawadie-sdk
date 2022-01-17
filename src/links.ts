import { ApolloLink } from "@apollo/client";
import { BatchHttpLink } from "@apollo/client/link/batch-http";
import { RetryLink } from "@apollo/client/link/retry";
import { onError } from "@apollo/link-error";

import { authLink, invalidTokenLinkWithTokenHandler } from "./auth";

interface MzawadieLinksConfig {
    /**
     * Url of the Mzawadie GraphQL API.
     */
    apiUrl: string;
    /**
     * Callback called when token expiration error occurred in Mzawadie API response.
     */
    tokenExpirationCallback: () => void;
}

/**
 * Creates list of links for Apollo client.
 * @param linksConfig Configuration for created links.
 */
export const createMzawadieLinks = ({ apiUrl, tokenExpirationCallback }: MzawadieLinksConfig) => {
    const invalidTokenLink = invalidTokenLinkWithTokenHandler(tokenExpirationCallback);
    const logLink = new ApolloLink((operation, forward) => {
        console.info("request", operation.getContext());

        return forward(operation).map((result) => {
            console.info("response", operation.getContext());
            return result;
        });
    });
    const errorLink = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
            graphQLErrors.forEach(({ message, locations, path }) =>
                console.log(
                    `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                )
            );
        if (networkError) console.log(`[Network error]: Backend is unreachable. Is it running?`);
    });

    console.log(apiUrl);

    return [
        errorLink,
        logLink,
        invalidTokenLink,
        authLink,
        new RetryLink(),
        new BatchHttpLink({ credentials: "include", uri: apiUrl }),
    ];
};

// @ts-nocheck
import { BatchHttpLink } from "@apollo/client/link/batch-http";
import { RetryLink } from "@apollo/client/link/retry";
import NodeHttpAdapter from "@pollyjs/adapter-node-http";
import { Polly, PollyServer } from "@pollyjs/core";
import FSPersister from "@pollyjs/persister-fs";
import fetch from "node-fetch";
import * as path from "path";
import { Context, setupPolly } from "setup-polly-jest";

import {
    API_CHANNEL,
    API_URI,
    authLink,
    createApolloClient2,
    createMzawadieCache,
    createMzawadieClient,
    invalidTokenLinkWithTokenHandler,
    MzawadieClient
} from "../src";
import { removeBlacklistedVariables } from "./utils";

/*
  Register the adapters and persisters we want to use. This way all future
  polly instances can access them by name.
*/
Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);

export const setupPollyMiddleware = (server: PollyServer): void => {
    server.any().on("beforePersist", (_, recording) => {
        const requestJson = JSON.parse(recording.request.postData.text);
        const responseHeaders = recording.response.headers.filter(
            (el: Record<string, string>) => !["authorization-bearer", "set-cookie"].includes(el.name)
        );
        const requestHeaders = recording.request.headers.filter(
            (el: Record<string, string>) => !["authorization-bearer", "set-cookie"].includes(el.name)
        );

        const filteredRequestJson = removeBlacklistedVariables(requestJson);

        const responseJson = JSON.parse(recording.response.content.text);
        const filteredResponseJson = removeBlacklistedVariables(responseJson);

        recording.request.postData.text = JSON.stringify(filteredRequestJson);
        recording.request.headers = requestHeaders;
        recording.response.cookies = [];
        recording.response.content.text = JSON.stringify(filteredResponseJson);
        recording.response.headers = responseHeaders;
    });
};

export const setupRecording = (): Context =>
    setupPolly({
        adapterOptions: {
            fetch: {
                context: global,
            },
        },
        adapters: ["node-http"],
        matchRequestsBy: {
            headers: false,
            url: {
                hash: false,
                hostname: false,
                password: false,
                pathname: false,
                port: false,
                protocol: false,
                query: false,
                username: false,
            },
            body(body): string {
                const json = JSON.parse(body);
                const filteredJson = removeBlacklistedVariables(json);

                return JSON.stringify(filteredJson);
            },
        },
        persister: "fs",
        persisterOptions: {
            fs: {
                recordingsDir: path.resolve(__dirname, "../recordings"),
            },
        },
        recordIfMissing: true,
    });

export const setupAPI = async () => {
    const cache = await createMzawadieCache({ persistCache: true });

    const apiUrl = API_URI;

    const invalidTokenLink = invalidTokenLinkWithTokenHandler(() => null);

    const links = [
        invalidTokenLink,
        authLink,
        new RetryLink(),
        new BatchHttpLink({
            // @ts-ignore
            fetch,
            uri: apiUrl,
        }),
    ];

    const client = createApolloClient2(cache, links);

    return { apiUrl, cache, client };
};

export const setupMzawadieClient = (): MzawadieClient => {
    return createMzawadieClient({
        apiUrl: API_URI,
        channel: API_CHANNEL,
    });
};

import { BatchHttpLink } from "@apollo/client/link/batch-http";
import { RetryLink } from "@apollo/client/link/retry";
import NodeHttpAdapter from "@pollyjs/adapter-node-http";
import { Polly } from "@pollyjs/core";
import FSPersister from "@pollyjs/persister-fs";
import fetch from "node-fetch";
import * as path from "path";
import { setupPolly } from "setup-polly-jest";

import {
    authLink,
    createMzawadieCache,
    createMzawadieClient,
    invalidTokenLinkWithTokenHandler,
} from "../src";

Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);

export function setupRecording() {
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
        },
        persister: "fs",
        persisterOptions: {
            fs: {
                recordingsDir: path.resolve(__dirname, "../recordings"),
            },
        },
        recordIfMissing: true,
    });
}

export async function setupAPI() {
    const cache = await createMzawadieCache({ persistCache: true });
    const apiUrl = process.env.NEXT_PUBLIC_API_URI || "https://demo.saleor.io/";
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
    const client = createMzawadieClient(cache, links);

    return { apiUrl, cache, client };
}

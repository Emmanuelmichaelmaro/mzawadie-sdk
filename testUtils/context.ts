import { ApolloClient } from "@apollo/client";

import APIProxy from "../src/api/APIProxy";
import { AuthAPI } from "../src/api/Auth";
import { MzawadieCartAPI } from "../src/api/Cart";
import { MzawadieCheckoutAPI } from "../src/api/Checkout";
import { CategoriesAPI } from "../src/api/categories/categories";
import { CollectionsAPI } from "../src/api/collections";
import { ProductsAPI } from "../src/api/products";
import { defaultConfig } from "../src/apollo";
import { ApolloClientManager } from "../src/apollo/ApolloClientManager";
import { MzawadieState } from "../src/core/state";
import { LocalStorageManager } from "../src/data/LocalStorageManager";
import { LocalStorageHandler } from "../src/helpers/LocalStorageHandler";
import { JobsManager } from "../src/jobs";
import { MzawadieContextType } from "../src/react/context";
import { setupAPI } from "./api";

export async function setupContextAndAPI(): Promise<{
    context: MzawadieContextType;
    client: ApolloClient<any>;
}> {
    const { client, apiUrl } = await setupAPI();

    const config = {
        ...defaultConfig,
        apiUrl,
        channel: "default-channel",
    };

    const localStorageHandler = new LocalStorageHandler();

    const apolloClientManager = new ApolloClientManager(client);

    const jobsManager = new JobsManager(localStorageHandler, apolloClientManager);

    const mzawadieState = new MzawadieState(
        config,
        localStorageHandler,
        apolloClientManager,
        jobsManager
    );

    const localStorageManager = new LocalStorageManager(localStorageHandler, mzawadieState);

    const authAPI = new AuthAPI(mzawadieState, jobsManager, config);

    const apiProxy = new APIProxy(client);

    const checkout = new MzawadieCheckoutAPI(mzawadieState, jobsManager, config);

    const cart = new MzawadieCartAPI(
        localStorageManager,
        apolloClientManager,
        mzawadieState,
        jobsManager,
        config
    );

    const categories = new CategoriesAPI(client);

    const collections = new CollectionsAPI(client, config);

    const products = new ProductsAPI(client, config);

    return {
        client,
        context: {
            api: {
                auth: authAPI,
                cart,
                categories,
                checkout,
                collections,
                legacyAPIProxy: apiProxy,
                products,
            },
            config,
        },
    };
}

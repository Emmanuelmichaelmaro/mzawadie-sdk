import { ApolloClient } from "@apollo/client";

import { Config } from "../apollo";
import { ApolloClientManager } from "../apollo/ApolloClientManager";
import { MzawadieState } from "../core/state";
import { LocalStorageManager } from "../data";
import { LocalStorageHandler } from "../helpers/LocalStorageHandler";
import { JobsManager } from "../jobs";
import APIProxy from "./APIProxy";
import { AuthAPI } from "./Auth";
import { MzawadieCartAPI } from "./Cart";
import { MzawadieCheckoutAPI } from "./Checkout";
import { CategoriesAPI } from "./categories/categories";
import { CollectionsAPI } from "./collections";
import { ProductsAPI } from "./products";

export * from "./Checkout";
export * from "./Cart";

export class MzawadieAPI {
    auth: AuthAPI;

    checkout: MzawadieCheckoutAPI;

    cart: MzawadieCartAPI;

    categories: CategoriesAPI;

    collections: CollectionsAPI;

    products: ProductsAPI;

    /**
     * @deprecated Please do not use it anymore. Reference to API Proxy will be removed in future.
     * Now it just exists for legacy React hooks, which also will be removed.
     */
    legacyAPIProxy: APIProxy;

    constructor(
        client: ApolloClient<any>,
        apiProxy: APIProxy,
        config: Config,
        onStateUpdate?: () => any
    ) {
        this.legacyAPIProxy = apiProxy;

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

        if (onStateUpdate) {
            mzawadieState.subscribeToNotifiedChanges(onStateUpdate);
        }

        this.auth = new AuthAPI(mzawadieState, jobsManager, config);

        this.checkout = new MzawadieCheckoutAPI(mzawadieState, jobsManager, config);

        this.cart = new MzawadieCartAPI(
            localStorageManager,
            apolloClientManager,
            mzawadieState,
            jobsManager,
            config
        );

        this.categories = new CategoriesAPI(client);

        this.collections = new CollectionsAPI(client, config);

        this.products = new ProductsAPI(client, config);

        this.legacyAPIProxy.attachAuthListener((authenticated: any) => {
            if (!authenticated) {
                localStorageHandler.setCheckout({});
                localStorageHandler.setPayment({});
                localStorageHandler.setJobs(null);
            }
        });
    }
}

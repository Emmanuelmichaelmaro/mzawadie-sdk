import { ApolloClient } from "@apollo/client";

import { MzawadieAPI } from "./api";
import APIProxy from "./api/APIProxy";
import {
    ApolloConfigInput,
    Config,
    ConfigInput,
    createApolloClient2,
    createMzawadieCache,
    createMzawadieLinks,
    defaultConfig,
} from "./apollo";

interface CreateAPIResult {
    api: MzawadieAPI;
    apiProxy: APIProxy;
    apolloClient: ApolloClient<any>;
}

export interface ConnectResult {
    /**
     * Mzawadie API.
     */
    api: MzawadieAPI;
    /**
     * Apollo client used by Mzawadie API.
     */
    apolloClient: ApolloClient<any>;
}

export class MzawadieManager {
    public config: Config;

    private apolloConfig: ApolloConfigInput;

    private apiProxy?: APIProxy;

    private api?: MzawadieAPI;

    private apolloClient?: ApolloClient<any>;

    private tokenRefreshing: boolean = false;

    private apiChangeListener?: (api?: MzawadieAPI) => any;

    constructor(config: ConfigInput, apolloConfig?: ApolloConfigInput) {
        this.config = {
            ...defaultConfig,
            ...config,
            loadOnStart: {
                ...defaultConfig.loadOnStart,
                ...config?.loadOnStart,
            },
        };
        this.apolloConfig = {
            persistCache: true,
            ...apolloConfig,
        };
    }

    /**
     * Use this method to obtain current API and listen to its update on occurred changes within it.
     * @param apiChangeListener Function called to get an API and called on every API update.
     */
    async connect(apiChangeListener?: (api?: MzawadieAPI) => any): Promise<ConnectResult> {
        if (!this.api || !this.apiProxy || !this.apolloClient) {
            const { api, apiProxy, apolloClient } = await MzawadieManager.createApi(
                this.config,
                this.apolloConfig,
                this.tokenExpirationCallback,
                this.onMzawadieAPIChange
            );

            this.api = api;
            this.apiProxy = apiProxy;
            this.apolloClient = apolloClient;
        }

        if (apiChangeListener) {
            this.apiChangeListener = apiChangeListener;
        }

        return { api: this.api, apolloClient: this.apolloClient };
    }

    private static createApi = async (
        config: Config,
        apolloConfig: ApolloConfigInput,
        tokenExpirationCallback: () => void,
        onMzawadieAPIChange: () => void
    ): Promise<CreateAPIResult> => {
        const { cache, persistCache, links, client, options } = apolloConfig;

        const mzawadieCache =
            !client && cache
                ? cache
                : await createMzawadieCache({
                      persistCache: !!persistCache,
                  });

        const mzawadieLinks =
            !client && links
                ? links
                : createMzawadieLinks({
                      apiUrl: config.apiUrl,
                      tokenExpirationCallback,
                  });

        const apolloClient = client || createApolloClient2(mzawadieCache, mzawadieLinks, options);

        const apiProxy = new APIProxy(apolloClient);

        const api = new MzawadieAPI(apolloClient, apiProxy, config, onMzawadieAPIChange);

        return { api, apiProxy, apolloClient };
    };

    private tokenExpirationCallback = async () => {
        if (!this.tokenRefreshing) {
            this.tokenRefreshing = true;

            const tokenRefreshResult = await this.api?.auth.refreshSignInToken();

            if (!tokenRefreshResult?.data?.token || tokenRefreshResult?.dataError) {
                await this.api?.auth.signOut();
            }

            this.tokenRefreshing = false;
        }
    };

    private onMzawadieAPIChange = () => {
        if (this.apiChangeListener) {
            this.apiChangeListener(this.api);
        }
    };
}

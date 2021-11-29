import { ApolloClient, ApolloProvider } from "@apollo/client";
import React, { useEffect, useState } from "react";

import { MzawadieManager } from "../../..";
import { MzawadieContext, MzawadieContextType } from "../../context";
import { IProps } from "./types";

// eslint-disable-next-line func-names
const MzawadieProvider: React.FC<IProps> = function ({ apolloConfig, config, children }: IProps) {
    const [context, setContext] = useState<MzawadieContextType | null>(null);
    const [client, setClient] = useState<ApolloClient<any> | null>(null);

    const getMzawadieApiAndClient = async (manager: MzawadieManager) => {
        const { api, apolloClient } = await manager.connect((mzawadieAPI) => {
            if (mzawadieAPI) {
                setContext({ api: mzawadieAPI, config });
            }
        });
        setContext({ api, config });
        setClient(apolloClient);
    };

    useEffect(() => {
        const manager = new MzawadieManager(config, apolloConfig);

        getMzawadieApiAndClient(manager);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (client && context) {
        return (
            <MzawadieContext.Provider value={context}>
                <ApolloProvider client={client}>{children}</ApolloProvider>
            </MzawadieContext.Provider>
        );
    }

    return null;
};

MzawadieProvider.displayName = "MzawadieProvider";

export { MzawadieProvider };

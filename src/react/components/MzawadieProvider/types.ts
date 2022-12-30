import React from "react";

import { ConfigInput, ApolloConfigInput } from "../../../apollo";

export interface IProps {
    children: React.ReactElement | React.ReactNode;
    /**
     * SDK configuration.
     */
    config: ConfigInput;
    /**
     * Custom Apollo client configuration.
     */
    apolloConfig?: ApolloConfigInput;
}

import React from "react";

import { MzawadieAPI } from "../api";
import { ConfigInput } from "../apollo";
import { MzawadieContext } from "./context";

export function useMzawadieClient(): MzawadieAPI {
    const mzawadie = React.useContext(MzawadieContext);

    if (!mzawadie) {
        throw new Error(
            "Could not find mzawadie's apollo client in the context. " +
                "Did you forget to wrap the root component in a <MzawadieProvider>?"
        );
    }

    return mzawadie.api;
}

export function useMzawadieConfig(): ConfigInput {
    const mzawadie = React.useContext(MzawadieContext);

    if (!mzawadie) {
        throw new Error(
            "Could not find mzawadie's apollo client in the context. " +
                "Did you forget to wrap the root component in a <MzawadieProvider>?"
        );
    }

    return mzawadie.config;
}

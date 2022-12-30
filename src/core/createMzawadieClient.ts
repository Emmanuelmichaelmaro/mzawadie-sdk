import { createApolloClient1 } from "../apollo";
import { auth } from "../apollo/auth";
import { user } from "../apollo/user";
import { DEVELOPMENT_MODE, WINDOW_EXISTS } from "./consts";
import { getState, State } from "./states";
import { createStorage, storage } from "./storage";
import { MzawadieClient, MzawadieClientOpts } from "./types";

export const createMzawadieClient = ({
    apiUrl,
    channel,
    autologin = true,
}: MzawadieClientOpts): MzawadieClient => {
    let _channel = channel;

    const setChannel = (channel: string): string => {
        _channel = channel;
        return _channel;
    };

    createStorage(autologin);

    const apolloClient = createApolloClient1(apiUrl, autologin);

    const coreInternals = { apolloClient, channel: _channel };

    const authSDK = auth(coreInternals);
    const userSDK = user(coreInternals);

    if (autologin) {
        const csrfToken = storage.getCSRFToken();

        if (csrfToken) {
            authSDK.refreshToken(true);
        }
    }

    const client = {
        auth: authSDK,
        user: userSDK,
        config: { channel: _channel, setChannel, autologin },
        _internal: { apolloClient },
        getState: (): State => getState(apolloClient),
    };

    if (DEVELOPMENT_MODE && WINDOW_EXISTS) {
        (window as any).__MZAWADIE_CLIENT__ = client;
    }

    return client;
};

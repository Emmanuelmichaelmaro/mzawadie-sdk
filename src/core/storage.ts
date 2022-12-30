import { LOCAL_STORAGE_EXISTS, MZAWADIE_CSRF_TOKEN } from "./consts";

export let storage: {
    setAccessToken: (token: string | null) => void;
    getAccessToken: () => string | null;
    setCSRFToken: (token: string | null) => void;
    getCSRFToken: () => string | null;
    setTokens: (tokens: { accessToken: string | null; csrfToken: string | null }) => void;
    clear: () => void;
};

export const createStorage = (autologinEnabled: boolean): void => {
    let accessToken: string | null = null;
    let csrfToken: string | null =
        autologinEnabled && LOCAL_STORAGE_EXISTS ? localStorage.getItem(MZAWADIE_CSRF_TOKEN) : null;

    const setCSRFToken = (token: string | null): void => {
        if (autologinEnabled && LOCAL_STORAGE_EXISTS) {
            if (token) {
                localStorage.setItem(MZAWADIE_CSRF_TOKEN, token);
            } else {
                localStorage.removeItem(MZAWADIE_CSRF_TOKEN);
            }
        }

        csrfToken = token;
    };
    const setAccessToken = (token: string | null): void => {
        accessToken = token;
    };

    const getAccessToken = (): string | null => accessToken;
    const getCSRFToken = (): string | null => csrfToken;

    const setTokens = ({
        accessToken,
        csrfToken,
    }: {
        accessToken: string | null;
        csrfToken: string | null;
    }): void => {
        setAccessToken(accessToken);
        setCSRFToken(csrfToken);
    };

    const clear = (): void => {
        setAccessToken(null);
        setCSRFToken(null);
    };

    storage = {
        setAccessToken,
        setCSRFToken,
        getAccessToken,
        getCSRFToken,
        setTokens,
        clear,
    };
};

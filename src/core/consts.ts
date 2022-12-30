export const WINDOW_EXISTS = typeof window !== "undefined";

export const LOCAL_STORAGE_EXISTS = WINDOW_EXISTS && !!window.localStorage;
export const CREDENTIAL_API_EXISTS = WINDOW_EXISTS && !!window.PasswordCredential;

export const DEVELOPMENT_MODE = process.env.REACT_APP_NODE_ENV === "development";
export const API_URI = process.env.REACT_APP_API_URI || "https://demo.saleor.io/graphql/";
export const API_CHANNEL = process.env.REACT_APP_API_CHANNEL || "default-channel";
export const TEST_AUTH_EMAIL = process.env.REACT_APP_TEST_AUTH_EMAIL || "";
export const TEST_AUTH_PASSWORD = process.env.REACT_APP_TEST_AUTH_PASSWORD || "";

export const MZAWADIE_CSRF_TOKEN = "_mzawadieCSRFToken";

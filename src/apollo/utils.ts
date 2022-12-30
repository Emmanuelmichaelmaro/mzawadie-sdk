import {
    ApolloCache,
    ApolloClient,
    ApolloClientOptions,
    ApolloLink,
    ObservableQuery,
} from "@apollo/client";

export type QueryShape = (...args: any) => any;

export type MapFn<T extends QueryShape, TResult> = (data: QueryData<T>) => TResult;

export type WatchMapFn<T extends QueryShape, TResult> = (data: WatchQueryData<T>) => TResult;

export type InferOptions<T> = T extends (_: any, o: infer O) => any ? O : never;

export type QueryData<T extends (...args: any) => any> = ReturnType<T> extends Promise<infer R>
    ? R extends { [key: string]: any }
        ? R["data"]
        : null
    : never;

export type WatchQueryData<T extends (...args: any) => any> = ReturnType<T> extends ObservableQuery<
    infer R
>
    ? R
    : never;

export type ApolloConfigOptions = Omit<ApolloClientOptions<any>, "link" | "cache">;

export interface Config {
    /**
     * Url of the Mzawadie GraphQL API.
     */
    apiUrl: string;
    /**
     * Determines data which have to be queried on start.
     */
    loadOnStart: {
        auth: boolean;
        checkout: boolean;
    };
    /**
     * Default channel slug.
     */
    channel: string;
}

export type DefaultConfig = Omit<Config, "apiUrl">;

export type ConfigInput = Omit<Config, keyof DefaultConfig> & Partial<DefaultConfig>;

export interface ApolloConfigInput {
    /**
     * Custom cache to be used by Apollo client. By default preconfigured cache is created automatically.
     */
    cache?: ApolloCache<any>;
    /**
     * Determines if the cache has to be persisted in local storage. True by default.
     */
    persistCache?: boolean;
    /**
     * Custom list of links to be used by Apollo client. By default preconfigured links are created automatically.
     */
    links?: ApolloLink[];
    /**
     * Custom Apollo client to be used by Mzawadie API. By default client is created automatically with default custom cache and links.
     * If you pass custom client, custom cache and links passed in this config will not be used, you must pass them to client oneself.
     */
    client?: ApolloClient<any>;
    /**
     * The rest of Apollo client options, which might be passed to it during its initialization.
     */
    options?: ApolloConfigOptions;
}

// errors are nested in data as it currently stands in the API
// this helper extracts all errors present
export const getErrorsFromData = <T extends { [key: string]: any }>(data: T) => {
    try {
        const error = Object.keys(data).reduce((acc, key) => {
            return {
                ...acc,
                ...(data[key].errors &&
                    !!data[key].errors.length && { userInputErrors: data[key].errors }),
            };
        }, {});

        return Object.keys(error).length ? error : null;
    } catch (e) {
        return null;
    }
};

export const isDataEmpty = <T extends { [key: string]: any }>(data: T) =>
    Object.keys(data).reduce((_, key) => !!data[key], true);

export function getMappedData<T extends QueryShape, TResult>(
    mapFn: MapFn<T, TResult> | WatchMapFn<T, TResult>,
    data: any
) {
    if (!data) {
        return null;
    }

    const mappedData = mapFn(data);
    const result = mappedData && !!Object.keys(mappedData).length ? mappedData : null;

    return result;
}

export const mergeEdges = (prevEdges: any[], newEdges: any[]) => [
    ...prevEdges,
    ...newEdges.filter((edge) => !prevEdges.some((e) => e.node.id === edge.node.id)),
];

export function filterNotEmptyArrayItems<TValue>(value: TValue | null | undefined): value is TValue {
    return value !== null && value !== undefined;
}

export function findValueInEnum<TEnum extends object>(
    needle: string,
    haystack: TEnum
): TEnum[keyof TEnum] {
    const match = Object.entries(haystack).find(([, value]) => value === needle);

    if (!match) {
        throw new Error(`Value ${needle} not found in enum`);
    }

    return needle as unknown as TEnum[keyof TEnum];
}

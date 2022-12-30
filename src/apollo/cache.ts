// @ts-nocheck
import { defaultDataIdFromObject, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { persistCache as apolloPersistCache, PersistentStorage } from "apollo3-cache-persist";
import { PersistedData } from "apollo3-cache-persist/lib/types";

import { LOCAL_STORAGE_EXISTS } from "../core";

interface MzawadieCacheConfig {
    /**
     * Determines if the cache has to be persisted in local storage. False by default.
     */
    persistCache?: boolean;
}

/**
 * Creates cache for Apollo client.
 * @param cacheConfig Configuration for created cache.
 */
export const createMzawadieCache = async ({ persistCache = false }: MzawadieCacheConfig) => {
    const mzawadieCache = new InMemoryCache({
        dataIdFromObject: (obj) => {
            // eslint-disable-next-line no-underscore-dangle
            if (obj.__typename === "Shop") {
                return "shop";
            }
            return defaultDataIdFromObject(obj);
        },
    });

    if (persistCache && LOCAL_STORAGE_EXISTS) {
        await apolloPersistCache({
            cache: mzawadieCache,
            storage: window.localStorage as PersistentStorage<PersistedData<NormalizedCacheObject>>,
        });
    }

    return mzawadieCache;
};

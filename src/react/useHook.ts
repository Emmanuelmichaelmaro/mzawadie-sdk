import { MzawadieAPI } from "../api";
import { useMzawadieClient } from "./helpers";

const useHook = <T extends keyof MzawadieAPI>(dataName: T): MzawadieAPI[T] => {
    const mzawadie = useMzawadieClient();

    const getHookData = () => {
        return mzawadie[dataName];
    };

    return getHookData();
};

export const hookFactory =
    <T extends keyof MzawadieAPI>(query: T) =>
    () =>
        useHook(query);

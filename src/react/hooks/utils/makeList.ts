import { ApolloClient, useApolloClient } from "@apollo/client";
import { useEffect, useRef, useState } from "react";

import BaseList, { BaseListVariables } from "../../../helpers/BaseList";
import { useMzawadieConfig } from "../../helpers";

export function makeList<TObject, TQuery, TVariables extends BaseListVariables>(
    createList: (client: ApolloClient<any>) => BaseList<TQuery, TObject, TVariables>
) {
    return (variables: TVariables) => {
        const client = useApolloClient();
        const config = useMzawadieConfig();
        const [data, setData] = useState<TObject[] | undefined>(undefined);
        const [loading, setLoading] = useState(true);
        const list = useRef<BaseList<TQuery, TObject, TVariables>>();
        const willMount = useRef(true);

        async function initList() {
            setLoading(true);
            list.current = createList(client);
            await list.current.init({ channel: config.channel, ...variables });
            setData(list.current.data);
            setLoading(false);
        }

        useEffect(() => {
            if (!willMount.current) {
                initList();
            }
        }, [JSON.stringify({ channel: config.channel, ...variables })]);

        if (willMount.current) {
            initList();
            willMount.current = false;
        }

        const next = async () => {
            setLoading(true);
            const nextData = await list.current?.next();
            setData(nextData);
            setLoading(false);
        };

        return {
            current: list.current?.current,
            data,
            loading,
            next,
            pageInfo: list.current?.pageInfo,
        };
    };
}

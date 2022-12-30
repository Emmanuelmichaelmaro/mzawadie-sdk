// @ts-ignore
import { getUserDetailsQuery } from "../apollo/queries/user";
import { UserDetailsQuery } from "../apollo/types";
import { MzawadieClientInternals } from "./types";

export type State = UserDetailsQuery | null;

export const getState = (client: MzawadieClientInternals["apolloClient"]): State =>
    client.readQuery<UserDetailsQuery>({
        query: getUserDetailsQuery,
    });

import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

import { AuthSDK } from "../apollo/auth";
import {
    AccountRegisterInput,
    MutationAccountAddressCreateArgs,
    MutationAccountAddressUpdateArgs,
    MutationAccountSetDefaultAddressArgs,
    MutationAccountUpdateArgs,
    MutationConfirmAccountArgs,
    MutationExternalAuthenticationUrlArgs,
    MutationPasswordChangeArgs,
    MutationRequestEmailChangeArgs,
    MutationRequestPasswordResetArgs,
    MutationSetPasswordArgs,
    MutationTokenCreateArgs,
    MutationTokenRefreshArgs,
} from "../apollo/types";
import { UserSDK } from "../apollo/user";
import { State } from "./states";

export interface MzawadieClientInternals {
    apolloClient: ApolloClient<NormalizedCacheObject>;
}

export interface MzawadieClientConfig {
    channel: string;
    autologin: boolean;
    setChannel(channel: string): string;
}
export interface MzawadieClient {
    auth: AuthSDK;
    user: UserSDK;
    config: MzawadieClientConfig;
    _internal: MzawadieClientInternals;
    getState(): State;
}

export interface MzawadieClientOpts {
    apiUrl: string;
    channel: string;
    autologin?: boolean;
}

export type JWTToken = {
    iat: number;
    iss: string;
    owner: string;
    exp: number;
    token: string;
    email: string;
    type: string;
    user_id: string;
    is_staff: boolean;
};

export type MzawadieClientMethodsProps = MzawadieClientInternals &
    Pick<MzawadieClientConfig, "channel">;

export type CreateAccountAddressOpts = MutationAccountAddressCreateArgs;
export type ChangeUserPasswordOpts = MutationPasswordChangeArgs;
export type LoginOpts = MutationTokenCreateArgs;
export type RefreshTokenOpts = Pick<MutationTokenRefreshArgs, "csrfToken">;
export type RegisterOpts = AccountRegisterInput;
export type RequestEmailChangeOpts = MutationRequestEmailChangeArgs;
export type RequestPasswordResetOpts = MutationRequestPasswordResetArgs;
export type SetAccountDefaultAddressOpts = MutationAccountSetDefaultAddressArgs;
export type SetPasswordOpts = MutationSetPasswordArgs;
export type UpdateAccountOpts = MutationAccountUpdateArgs;
export type UpdateAccountAddressOpts = MutationAccountAddressUpdateArgs;
export type ExternalAuthOpts = MutationExternalAuthenticationUrlArgs;
export type ConfirmAccountOpts = MutationConfirmAccountArgs;

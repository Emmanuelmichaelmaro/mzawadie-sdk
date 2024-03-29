import { ApolloClient, MutationOptions as ApolloMutationOptions } from "@apollo/client";

import * as Address from "./address";
import { AccountUpdate, AccountUpdateVariables } from "./gqlTypes/AccountUpdate";
import { CreateUserAddress, CreateUserAddressVariables } from "./gqlTypes/CreateUserAddress";
import { DeleteUserAddress, DeleteUserAddressVariables } from "./gqlTypes/DeleteUserAddress";
import { PasswordChange, PasswordChangeVariables } from "./gqlTypes/PasswordChange";
import {
    SetCustomerDefaultAddress,
    SetCustomerDefaultAddressVariables,
} from "./gqlTypes/SetCustomerDefaultAddress";
import { SetPassword, SetPasswordVariables } from "./gqlTypes/SetPassword";
import { UpdateUserAddress, UpdateUserAddressVariables } from "./gqlTypes/UpdateUserAddress";
import * as User from "./user";

export type MutationOptions<TData, TVariables> = Omit<
    ApolloMutationOptions<TData, TVariables>,
    "mutation"
>;

// TODO: Add ability to pass custom fragments to mutations
export const MUTATIONS = {
    AccountUpdate: <TCacheShape>(
        client: ApolloClient<TCacheShape>,
        options: MutationOptions<AccountUpdate, AccountUpdateVariables>
    ) =>
        client.mutate({
            mutation: User.updateAccountMutation,
            ...options,
        }),

    AddressTypeUpdate: <TCacheShape>(
        client: ApolloClient<TCacheShape>,
        options: MutationOptions<SetCustomerDefaultAddress, SetCustomerDefaultAddressVariables>
    ) =>
        client.mutate({
            mutation: Address.setCustomerDefaultAddressMutation,
            ...options,
        }),

    CreateUserAddress: <TCacheShape>(
        client: ApolloClient<TCacheShape>,
        options: MutationOptions<CreateUserAddress, CreateUserAddressVariables>
    ) =>
        client.mutate({
            mutation: Address.createUserAddressMutation,
            ...options,
        }),

    DeleteUserAddress: <TCacheShape>(
        client: ApolloClient<TCacheShape>,
        options: MutationOptions<DeleteUserAddress, DeleteUserAddressVariables>
    ) =>
        client.mutate({
            mutation: Address.deleteUserAddressMutation,
            ...options,
        }),

    PasswordChange: <TCacheShape>(
        client: ApolloClient<TCacheShape>,
        options: MutationOptions<PasswordChange, PasswordChangeVariables>
    ) =>
        client.mutate({
            mutation: User.changeUserPasswordMutation,
            ...options,
        }),

    SetPassword: <TCacheShape>(
        client: ApolloClient<TCacheShape>,
        options: MutationOptions<SetPassword, SetPasswordVariables>
    ) =>
        client.mutate({
            mutation: User.setPasswordMutation,
            ...options,
        }),

    UpdateUserAddress: <TCacheShape>(
        client: ApolloClient<TCacheShape>,
        options: MutationOptions<UpdateUserAddress, UpdateUserAddressVariables>
    ) =>
        client.mutate({
            mutation: Address.updateUserAddressMutation,
            ...options,
        }),
};

export type MUTATIONS = typeof MUTATIONS;

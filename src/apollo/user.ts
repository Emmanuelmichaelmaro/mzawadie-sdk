import { FetchResult } from "@apollo/client";

import {
    ConfirmAccountOpts,
    CreateAccountAddressOpts,
    MzawadieClientMethodsProps,
    RequestEmailChangeOpts,
    SetAccountDefaultAddressOpts,
    UpdateAccountAddressOpts,
    UpdateAccountOpts,
} from "../core";
import { auth } from "./auth";
import {
    createUserAddressMutation,
    deleteUserAddressMutation,
    setCustomerDefaultAddressMutation,
    updateUserAddressMutation,
} from "./mutations/address";
import {
    confirmAccountMutation,
    confirmEmailChangeMutation,
    deleteAccountMutation,
    requestAccountDeleteMutation,
    requestEmailChangeMutation,
    updateAccountMutation,
} from "./mutations/user";
import {
    AccountConfirmMutation,
    AccountConfirmMutationVariables,
    AccountDeleteMutation,
    AccountDeleteMutationVariables,
    AccountRequestDeletionMutation,
    AccountRequestDeletionMutationVariables,
    AccountUpdateMutation,
    AccountUpdateMutationVariables,
    ConfirmEmailChangeMutation,
    ConfirmEmailChangeMutationVariables,
    CreateUserAddressMutation,
    CreateUserAddressMutationVariables,
    DeleteUserAddressMutation,
    DeleteUserAddressMutationVariables,
    RequestEmailChangeMutation,
    RequestEmailChangeMutationVariables,
    SetCustomerDefaultAddressMutation,
    SetCustomerDefaultAddressMutationVariables,
    UpdateUserAddressMutation,
    UpdateUserAddressMutationVariables,
} from "./types";

export interface UserSDK {
    accountDelete: (token: string) => Promise<FetchResult<AccountDeleteMutation>>;
    accountRequestDeletion: (
        redirectUrl: string
    ) => Promise<FetchResult<AccountRequestDeletionMutation>>;
    confirmEmailChange: (token: string) => Promise<FetchResult<ConfirmEmailChangeMutation>>;
    createAccountAddress: (
        opts: CreateAccountAddressOpts
    ) => Promise<FetchResult<CreateUserAddressMutation>>;
    deleteAccountAddress: (addressId: string) => Promise<FetchResult<DeleteUserAddressMutation>>;
    requestEmailChange: (
        opts: RequestEmailChangeOpts
    ) => Promise<FetchResult<RequestEmailChangeMutation>>;
    setAccountDefaultAddress: (
        opts: SetAccountDefaultAddressOpts
    ) => Promise<FetchResult<SetCustomerDefaultAddressMutation>>;
    updateAccount: (opts: UpdateAccountOpts) => Promise<FetchResult<AccountUpdateMutation>>;
    updateAccountAddress: (
        opts: UpdateAccountAddressOpts
    ) => Promise<FetchResult<UpdateUserAddressMutation>>;
    confirmAccount: (opts: ConfirmAccountOpts) => Promise<FetchResult<AccountConfirmMutation>>;
}

export const user = ({ apolloClient: client, channel }: MzawadieClientMethodsProps): UserSDK => {
    const _auth = auth({ apolloClient: client, channel });

    /**
     * Remove user account.
     *
     * @param token - A one-time token required to remove account. Sent by email using AccountRequestDeletion mutation.
     * @returns Deleted user's account data and errors.
     */
    const accountDelete: UserSDK["accountDelete"] = async (token) => {
        const result = await client.mutate<AccountDeleteMutation, AccountDeleteMutationVariables>({
            mutation: deleteAccountMutation,
            variables: { token },
        });

        await _auth.logout();

        return result;
    };

    /**
     * Sends an email with the account removal link for the logged-in user.
     *
     * @param redirectUrl - URL of a view where users should be redirected to delete their account. URL in RFC 1808 format.
     * @returns Errors if there are some.
     */
    const accountRequestDeletion: UserSDK["accountRequestDeletion"] = async (redirectUrl) => {
        return await client.mutate<
            AccountRequestDeletionMutation,
            AccountRequestDeletionMutationVariables
        >({
            mutation: requestAccountDeleteMutation,
            variables: { channel, redirectUrl },
        });
    };

    /**
     * Confirm the email change of the logged-in user.
     *
     * @param token - A one-time token required to change the email.
     * @returns A user instance with a new email and errors.
     */
    const confirmEmailChange: UserSDK["confirmEmailChange"] = async (token) => {
        return await client.mutate<ConfirmEmailChangeMutation, ConfirmEmailChangeMutationVariables>({
            mutation: confirmEmailChangeMutation,
            variables: { channel, token },
        });
    };

    /**
     * Request email change of the logged in user.
     *
     * @param opts - Object with new user email, user's password and URL of a view where users should be redirected to update the email address.
     * @returns A user instance and errors.
     */
    const requestEmailChange: UserSDK["requestEmailChange"] = async (opts) => {
        return await client.mutate<RequestEmailChangeMutation, RequestEmailChangeMutationVariables>({
            mutation: requestEmailChangeMutation,
            variables: { channel, ...opts },
        });
    };

    /**
     * Updates the account of the logged-in account.
     *
     * @param opts - Fields required to update the account of the logged-in account.
     * @returns Updated user account.
     */
    const updateAccount: UserSDK["updateAccount"] = async (opts) => {
        return await client.mutate<AccountUpdateMutation, AccountUpdateMutationVariables>({
            mutation: updateAccountMutation,
            variables: { ...opts },
        });
    };

    /**
     * Sets a default address for the authenticated account.
     *
     * @param opts - Object with ID of the address to set as default and the type of address.
     * @returns Updated user account.
     */
    const setAccountDefaultAddress: UserSDK["setAccountDefaultAddress"] = async (opts) => {
        return await client.mutate<
            SetCustomerDefaultAddressMutation,
            SetCustomerDefaultAddressMutationVariables
        >({
            mutation: setCustomerDefaultAddressMutation,
            variables: { ...opts },
        });
    };

    /**
     * Create a new address for the account.
     *
     * @param opts - Object with fields required to create address and a type of address.
     * If provided, the new address will be automatically assigned as the customer's default address of that type.
     * @returns Updated user account.
     */
    const createAccountAddress: UserSDK["createAccountAddress"] = async (opts) => {
        return await client.mutate<CreateUserAddressMutation, CreateUserAddressMutationVariables>({
            mutation: createUserAddressMutation,
            variables: { ...opts },
        });
    };

    /**
     * Delete an address of the logged-in account.
     *
     * @param addressId - ID of the address to delete.
     * @returns Updated user account.
     */
    const deleteAccountAddress: UserSDK["deleteAccountAddress"] = async (addressId) => {
        return await client.mutate<DeleteUserAddressMutation, DeleteUserAddressMutationVariables>({
            mutation: deleteUserAddressMutation,
            variables: { addressId },
        });
    };

    /**
     * Updates an address of the logged-in account.
     *
     * @param opts - Object with ID of the address to update and fields required to update the address.
     * @returns Updated user account.
     */
    const updateAccountAddress: UserSDK["updateAccountAddress"] = async (opts) => {
        return await client.mutate<UpdateUserAddressMutation, UpdateUserAddressMutationVariables>({
            mutation: updateUserAddressMutation,
            variables: { ...opts },
        });
    };

    /**
     * Confirms user account with token sent by email during registration.
     *
     * @param opts - Object with email of the user and one-time token required to confirm the account.
     * @returns Confirmed user account.
     */
    const confirmAccount: UserSDK["confirmAccount"] = async (opts) => {
        return await client.mutate<AccountConfirmMutation, AccountConfirmMutationVariables>({
            mutation: confirmAccountMutation,
            variables: { ...opts },
        });
    };

    return {
        accountDelete,
        accountRequestDeletion,
        confirmEmailChange,
        createAccountAddress,
        deleteAccountAddress,
        requestEmailChange,
        updateAccount,
        updateAccountAddress,
        setAccountDefaultAddress,
        confirmAccount,
    };
};

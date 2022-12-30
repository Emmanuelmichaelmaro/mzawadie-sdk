import { gql } from "@apollo/client";

import { userFragment } from "../fragments/auth";
import { checkoutAddressFragment } from "../fragments/checkout";
import { accountErrorFragment } from "../fragments/errors";

export const setCustomerDefaultAddressMutation = gql`
    ${userFragment}
    ${accountErrorFragment}
    mutation SetCustomerDefaultAddress($id: ID!, $type: AddressTypeEnum!) {
        accountSetDefaultAddress(id: $id, type: $type) {
            errors: accountErrors {
                ...AccountError
            }
            user {
                ...User
            }
        }
    }
`;

export const deleteUserAddressMutation = gql`
    ${userFragment}
    ${accountErrorFragment}
    mutation DeleteUserAddress($addressId: ID!) {
        accountAddressDelete(id: $addressId) {
            errors: accountErrors {
                ...AccountError
            }
            user {
                ...User
            }
        }
    }
`;

export const createUserAddressMutation = gql`
    ${checkoutAddressFragment}
    ${userFragment}
    ${accountErrorFragment}
    mutation CreateUserAddress($input: AddressInput!) {
        accountAddressCreate(input: $input) {
            errors: accountErrors {
                ...AccountError
            }
            address {
                ...Address
            }
            user {
                ...User
            }
        }
    }
`;

export const updateUserAddressMutation = gql`
    ${checkoutAddressFragment}
    ${userFragment}
    ${accountErrorFragment}
    mutation UpdateUserAddress($input: AddressInput!, $id: ID!) {
        accountAddressUpdate(input: $input, id: $id) {
            errors: accountErrors {
                ...AccountError
            }
            address {
                ...Address
            }
            user {
                ...User
            }
        }
    }
`;

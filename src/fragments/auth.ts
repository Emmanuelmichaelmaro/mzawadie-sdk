import { gql } from "@apollo/client";

import { checkoutAddressFragment } from "./checkout";

export const userFragment = gql`
    ${checkoutAddressFragment}
    fragment User on User {
        id
        email
        firstName
        lastName
        isStaff
        defaultShippingAddress {
            ...Address
        }
        defaultBillingAddress {
            ...Address
        }
        addresses {
            ...Address
        }
        userPermissions {
            code
            name
        }
        avatar {
            url
        }
    }
`;

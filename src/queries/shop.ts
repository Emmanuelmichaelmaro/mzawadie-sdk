import { gql } from "@apollo/client";

export const getShop = gql`
    query GetShop {
        shop {
            displayGrossPrices
            defaultCountry {
                code
                country
            }
            countries {
                country
                code
            }
        }
    }
`;

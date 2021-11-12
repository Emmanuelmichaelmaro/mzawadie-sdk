/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: UserCheckoutTokenList
// ====================================================


export interface UserCheckoutTokenList_me {
  __typename: "User";
  id: string;
  checkoutTokens: any[] | null;
}

export interface UserCheckoutTokenList {
  me: UserCheckoutTokenList_me | null;
}

export interface UserCheckoutTokenListVariables {
  channel?: string | null;
}

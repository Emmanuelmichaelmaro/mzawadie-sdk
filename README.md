# Mzawadie API SDK

This package contains all queries and mutations that are used in our sample storefront. It can be used for semi-custom or fully-custom (with ability to extend existing queries) storefront solutions.

> :warning: **Note: Mzawadie SDK is still under heavy development and its API may change.**
## Table of Contents

- [Setup](#setup)
- [Features](#features)
- [Local development](#local-development)

## Setup (PACKAGE CURRENTLY NOT RELEASED TO NPM)

### Custom implementation

```bash
npm install @mzawadie/sdk
```

Create new mzawadie client by using our built-in pre-configured apollo client:

```
import { createMzawadieClient } from '@mzawadie/sdk'

const client = createMzawadieClient(API_URL)
```

## Usage

### React

We provide a custom hook per each query that have near identical API to `react-apollo` but are dynamically typed, with built-in error handling.

In your root file:

```
import { MzawadieProvider } from '@mzawadie/sdk'

const App = () => {
    const { authenticated, user, signIn } = useAuth();
    
    const handleSignIn = async () => {
        const { data, dataError } = await signIn("admin@example.com", "admin");
        
        if (dataError) {
            /**
            * Unable to sign in.
            **/
        } else if (data) {
            /**
            * User signed in successfully.
            **/
        }
    };
    
    if (authenticated && user) {
        return <span>Signed in as {user.firstName}</span>;
    } else {
        return <button onClick={handleSignIn}>Sign in</button>;
    }
};

const rootElement = document.getElementById('root')

const config = { apiUrl: "http://localhost:8000/graphql/", channel: "" };
const apolloConfig = {
    /* 
        Optional custom Apollo client config.
        Here you may append custom Apollo cache, links or the whole client. 
        You may also use import { createMzawadieCache, createMzawadieClient, createMzawadieLinks } from "@mzawadie/sdk" to create semi-custom implementation of Apollo.
    */
};

ReactDOM.render(
    <MzawadieProvider config={config} apolloConfig={apolloConfig}>
        <App />
    </MzawadieProvider>,
    rootElement
)
```

## Features

We provide an API with methods and fields, performing one, scoped type of work. You may access them straight from `MzawadieAPI` or use React hooks, depending on [which setup do you select](#setup).

| API object              | React hook                                                                                             | Description                                                                     |
| :---------------------- | :----------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------ |
| `MzawadieAPI.auth`        | `useAuth()`                                                                                            | Handles user authentication and stores data about the currently signed in user. |
| `MzawadieAPI.cart`        | `useCart()`                                                                                            | Collects products to cart and calculates their prices.                          |
| `MzawadieAPI.checkout`    | `useCheckout()`                                                                                        | Uses cart and handles the whole checkout process.                               |
| `MzawadieAPI.products`    | `useProductDetails()`, `useProductList()`                                                              | Obtains products.                                                               |
| `MzawadieAPI.collections` | `useCollectionDetails()`, `useCollectionList()`                                                        | Obtains collections.                                                            |
| `MzawadieAPI.categories`  | `useCategoryDetails()`, `useCategoryList()`, `useCategoryAncestorsList()`, `useCategoryChildrenList()` | Obtains categories.                                                             |

## Local development

Our aim it to build SDK, highly configurable, as a separate package, which you will not require modifications. Although if you want to alter the project, especially if you want to contribute, it is possible to develop storefront and SDK simultaneously. To do this, you need
to link it to the storefront's project.

```bash
$ cd lib
$ npm link
$ cd <your storefront path>
$ npm link @mzawadie/sdk
```

Notice that in [our example storefront](https://github.com/Emmanuelmichaelmaro/saleor-storefront)
webpack is configured to always resolve `react` to `./node_modules/react`. It may
seem redundant for the most use cases, but helps in sdk's local development, because
it overcomes `npm`'s limitations regarding peer dependencies hoisting, explicitly
telling webpack to always have one and only copy of `react`.

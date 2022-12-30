import { Config } from "../../apollo";
import { ApolloClientManager } from "../../apollo/ApolloClientManager";
import { MzawadieState, MzawadieStateLoaded } from "../../core/state";
import { IMzawadieStateSummeryPrices, StateItems } from "../../core/state/types";
import { LocalStorageManager } from "../../data";
import { ErrorListener } from "../../helpers";
import { ICheckoutModel } from "../../helpers/LocalStorageHandler";
import { JobsManager } from "../../jobs";
import { ErrorCartTypes } from "../../jobs/Cart";
import { IDiscount, IItems, IShippingPrice, ISubtotalPrice, ITotalPrice } from "./types";
import { sortCheckoutLines } from "./utils";

export class MzawadieCartAPI extends ErrorListener {
    loaded: boolean;

    items: IItems;

    totalPrice: ITotalPrice;

    subtotalPrice: ISubtotalPrice;

    shippingPrice: IShippingPrice;

    discount?: IDiscount;

    private apolloClientManager: ApolloClientManager;

    private jobsManager: JobsManager;

    private localStorageManager: LocalStorageManager;

    private mzawadieState: MzawadieState;

    // temporary solution, might change in future
    private config: Config;

    constructor(
        localStorageManager: LocalStorageManager,
        apolloClientManager: ApolloClientManager,
        mzawadieState: MzawadieState,
        jobsManager: JobsManager,
        config: Config
    ) {
        super();
        this.mzawadieState = mzawadieState;
        this.localStorageManager = localStorageManager;
        this.apolloClientManager = apolloClientManager;
        this.jobsManager = jobsManager;
        this.config = config;

        this.loaded = false;

        this.jobsManager.attachErrorListener("cart", this.fireError);

        this.mzawadieState.subscribeToChange(StateItems.CHECKOUT, (checkout: ICheckoutModel) => {
            this.items = checkout?.lines
                ?.filter((line: any) => line.quantity > 0)
                .sort(sortCheckoutLines);
        });
        this.mzawadieState.subscribeToChange(
            StateItems.SUMMARY_PRICES,
            (summaryPrices: IMzawadieStateSummeryPrices) => {
                const { totalPrice, subtotalPrice, shippingPrice, discount } = summaryPrices || {};
                this.totalPrice = totalPrice;
                this.subtotalPrice = subtotalPrice;
                this.shippingPrice = shippingPrice;
                this.discount = discount;
            }
        );
        this.mzawadieState.subscribeToChange(StateItems.LOADED, (loaded: MzawadieStateLoaded) => {
            this.loaded = loaded.checkout && loaded.summaryPrices;
        });
    }

    addItem = async (variantId: string, quantity: number) => {
        // 1. save in local storage
        this.localStorageManager.addItemToCart(variantId, quantity);

        // 2. save online if possible (if checkout id available)
        if (this.mzawadieState.checkout?.lines) {
            const { data, error } = await this.apolloClientManager.getRefreshedCheckoutLines(
                this.mzawadieState.checkout.lines,
                this.config.channel
            );

            if (error) {
                this.fireError(error, ErrorCartTypes.SET_CART_ITEM);
            } else {
                this.localStorageManager.getHandler().setCheckout({
                    ...this.mzawadieState.checkout,
                    lines: data,
                });
            }
        }
        if (this.mzawadieState.checkout?.id) {
            this.jobsManager.addToQueue("cart", "setCartItem");
            return {
                pending: true,
            };
        }
        return {
            pending: false,
        };
    };

    removeItem = async (variantId: string) => {
        // 1. save in local storage
        this.localStorageManager.removeItemFromCart(variantId);
        // 2. save online if possible (if checkout id available)
        if (this.mzawadieState.checkout?.lines) {
            const { data, error } = await this.apolloClientManager.getRefreshedCheckoutLines(
                this.mzawadieState.checkout.lines,
                this.config.channel
            );

            if (error) {
                this.fireError(error, ErrorCartTypes.SET_CART_ITEM);
            } else {
                this.localStorageManager.getHandler().setCheckout({
                    ...this.mzawadieState.checkout,
                    lines: data,
                });
            }
        }
        if (this.mzawadieState.checkout?.id) {
            this.jobsManager.addToQueue("cart", "setCartItem");
            return {
                pending: true,
            };
        }
        return {
            pending: false,
        };
    };

    subtractItem = async (variantId: string) => {
        // 1. save in local storage
        this.localStorageManager.subtractItemFromCart(variantId);

        // 2. save online if possible (if checkout id available)
        if (this.mzawadieState.checkout?.lines) {
            const { data, error } = await this.apolloClientManager.getRefreshedCheckoutLines(
                this.mzawadieState.checkout.lines,
                this.config.channel
            );

            if (error) {
                this.fireError(error, ErrorCartTypes.SET_CART_ITEM);
            } else {
                this.localStorageManager.getHandler().setCheckout({
                    ...this.mzawadieState.checkout,
                    lines: data,
                });
            }
        }
        if (this.mzawadieState.checkout?.id) {
            this.jobsManager.addToQueue("cart", "setCartItem");
            return {
                pending: true,
            };
        }
        return {
            pending: false,
        };
    };

    updateItem = async (variantId: string, quantity: number) => {
        // 1. save in local storage
        this.localStorageManager.updateItemInCart(variantId, quantity);

        // 2. save online if possible (if checkout id available)
        if (this.mzawadieState.checkout?.lines) {
            const { data, error } = await this.apolloClientManager.getRefreshedCheckoutLines(
                this.mzawadieState.checkout.lines,
                this.config.channel
            );

            if (error) {
                this.fireError(error, ErrorCartTypes.SET_CART_ITEM);
            } else {
                this.localStorageManager.getHandler().setCheckout({
                    ...this.mzawadieState.checkout,
                    lines: data,
                });
            }
        }
        if (this.mzawadieState.checkout?.id) {
            this.jobsManager.addToQueue("cart", "setCartItem");
            return {
                pending: true,
            };
        }
        return {
            pending: false,
        };
    };
}

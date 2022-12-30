// @ts-nocheck
import { Config } from "../../apollo";
import { PaymentGateway } from "../../apollo/fragments/gqlTypes/PaymentGateway";
import { MzawadieState, MzawadieStateLoaded } from "../../core/state";
import { StateItems } from "../../core/state/types";
import { ErrorListener } from "../../helpers";
import { ICheckoutModel, IPaymentModel } from "../../helpers/LocalStorageHandler";
import { JobsManager } from "../../jobs";
import { PromiseRunResponse } from "../types";
import {
    DataErrorCheckoutTypes,
    FunctionErrorCheckoutTypes,
    IAddress,
    IAvailableShippingMethods,
    ICheckout,
    IPayment,
    IPromoCodeDiscount,
    CreatePaymentInput,
    CompleteCheckoutInput,
} from "./types";

type CheckoutResponse = PromiseRunResponse<DataErrorCheckoutTypes, FunctionErrorCheckoutTypes>;

export class MzawadieCheckoutAPI extends ErrorListener {
    loaded: boolean;

    checkout?: ICheckout;

    promoCodeDiscount?: IPromoCodeDiscount;

    billingAsShipping?: boolean;

    selectedShippingAddressId?: string;

    selectedBillingAddressId?: string;

    availableShippingMethods?: IAvailableShippingMethods;

    availablePaymentGateways?: PaymentGateway[];

    payment?: IPayment;

    private mzawadieState: MzawadieState;

    private jobsManager: JobsManager;

    // temporary solution, might change in future
    private config: Config;

    constructor(mzawadieState: MzawadieState, jobsManager: JobsManager, config: Config) {
        super();
        this.mzawadieState = mzawadieState;
        this.jobsManager = jobsManager;
        this.config = config;

        this.loaded = false;

        this.mzawadieState.subscribeToChange(StateItems.CHECKOUT, (checkout: ICheckoutModel) => {
            const {
                id,
                token,
                email,
                shippingAddress,
                billingAddress,
                selectedShippingAddressId,
                selectedBillingAddressId,
                billingAsShipping,
                availablePaymentGateways,
                availableShippingMethods,
                shippingMethod,
                promoCodeDiscount,
            } = checkout || {};
            this.checkout = {
                billingAddress,
                email,
                id,
                shippingAddress,
                shippingMethod,
                token,
            };
            this.selectedShippingAddressId = selectedShippingAddressId;
            this.selectedBillingAddressId = selectedBillingAddressId;
            this.availablePaymentGateways = availablePaymentGateways;
            this.availableShippingMethods = availableShippingMethods;
            this.billingAsShipping = billingAsShipping;
            this.promoCodeDiscount = {
                discountName: promoCodeDiscount?.discountName,
                voucherCode: promoCodeDiscount?.voucherCode,
            };
        });
        this.mzawadieState.subscribeToChange(StateItems.PAYMENT, (payment: IPaymentModel) => {
            const { id, token, gateway, creditCard, total } = payment || {};
            this.payment = {
                creditCard,
                gateway,
                id,
                token,
                total,
            };
        });
        this.mzawadieState.subscribeToChange(StateItems.LOADED, (loaded: MzawadieStateLoaded) => {
            this.loaded = loaded.checkout && loaded.payment;
        });
    }

    setShippingAddress = async (shippingAddress: IAddress, email: string): CheckoutResponse => {
        const checkoutId = this.mzawadieState.checkout?.id;
        const alteredLines = this.mzawadieState.checkout?.lines?.map((item) => ({
            quantity: item!.quantity,
            variantId: item?.variant!.id,
        }));

        if (alteredLines && checkoutId) {
            const { data, dataError } = await this.jobsManager.run("checkout", "setShippingAddress", {
                channel: this.config.channel,
                checkoutId,
                email,
                selectedShippingAddressId: shippingAddress.id,
                shippingAddress,
            });

            return {
                data,
                dataError,
                pending: false,
            };
        }
        if (alteredLines) {
            const { data, dataError } = await this.jobsManager.run("checkout", "createCheckout", {
                channel: this.config.channel,
                email,
                lines: alteredLines,
                selectedShippingAddressId: shippingAddress.id,
                shippingAddress,
            });

            return {
                data,
                dataError,
                pending: false,
            };
        }
        return {
            functionError: {
                error: new Error("You need to add items to cart before setting shipping address."),
                type: FunctionErrorCheckoutTypes.ITEMS_NOT_ADDED_TO_CART,
            },
            pending: false,
        };
    };

    setBillingAddress = async (billingAddress: IAddress, email?: string): CheckoutResponse => {
        const checkoutId = this.mzawadieState.checkout?.id;
        const isShippingRequiredForProducts = this.mzawadieState.checkout?.lines
            ?.filter((line) => line.quantity > 0)
            .some(({ variant }) => variant.product?.productType.isShippingRequired);
        const alteredLines = this.mzawadieState.checkout?.lines?.map((item) => ({
            quantity: item!.quantity,
            variantId: item?.variant!.id,
        }));

        if (isShippingRequiredForProducts && checkoutId && this.checkout?.shippingAddress) {
            const { data, dataError } = await this.jobsManager.run("checkout", "setBillingAddress", {
                billingAddress,
                billingAsShipping: false,
                checkoutId,
                selectedBillingAddressId: billingAddress.id,
            });

            return {
                data,
                dataError,
                pending: false,
            };
        }
        if (isShippingRequiredForProducts) {
            return {
                functionError: {
                    error: new Error(
                        "You need to set shipping address before setting billing address."
                    ),
                    type: FunctionErrorCheckoutTypes.SHIPPING_ADDRESS_NOT_SET,
                },
                pending: false,
            };
        }
        if (!isShippingRequiredForProducts && email && checkoutId && alteredLines) {
            const { data, dataError } = await this.jobsManager.run(
                "checkout",
                "setBillingAddressWithEmail",
                {
                    billingAddress,
                    checkoutId,
                    email,
                    selectedBillingAddressId: billingAddress.id,
                }
            );

            return {
                data,
                dataError,
                pending: false,
            };
        }
        if (!isShippingRequiredForProducts && email && alteredLines) {
            const { data, dataError } = await this.jobsManager.run("checkout", "createCheckout", {
                billingAddress,
                channel: this.config.channel,
                email,
                lines: alteredLines,
                selectedBillingAddressId: billingAddress.id,
            });

            return {
                data,
                dataError,
                pending: false,
            };
        }
        if (!isShippingRequiredForProducts && !email) {
            return {
                functionError: {
                    error: new Error(
                        "You need to provide email when products do not require shipping before setting billing address."
                    ),
                    type: FunctionErrorCheckoutTypes.EMAIL_NOT_SET,
                },
                pending: false,
            };
        }
        return {
            functionError: {
                error: new Error("You need to add items to cart before setting billing address."),
                type: FunctionErrorCheckoutTypes.ITEMS_NOT_ADDED_TO_CART,
            },
            pending: false,
        };
    };

    setBillingAsShippingAddress = async (): PromiseRunResponse<
        DataErrorCheckoutTypes,
        FunctionErrorCheckoutTypes
    > => {
        const checkoutId = this.mzawadieState.checkout?.id;

        if (checkoutId && this.checkout?.shippingAddress) {
            const { data, dataError } = await this.jobsManager.run("checkout", "setBillingAddress", {
                billingAddress: this.checkout.shippingAddress,
                billingAsShipping: true,
                checkoutId,
                selectedBillingAddressId: this.checkout?.shippingAddress.id,
            });

            return {
                data,
                dataError,
                pending: false,
            };
        }
        return {
            functionError: {
                error: new Error("You need to set shipping address before setting billing address."),
                type: FunctionErrorCheckoutTypes.SHIPPING_ADDRESS_NOT_SET,
            },
            pending: false,
        };
    };

    setShippingMethod = async (shippingMethodId: string): CheckoutResponse => {
        const checkoutId = this.mzawadieState.checkout?.id;

        if (checkoutId) {
            const { data, dataError } = await this.jobsManager.run("checkout", "setShippingMethod", {
                checkoutId,
                shippingMethodId,
            });
            return {
                data,
                dataError,
                pending: false,
            };
        }
        return {
            functionError: {
                error: new Error("You need to set shipping address before setting shipping method."),
                type: FunctionErrorCheckoutTypes.SHIPPING_ADDRESS_NOT_SET,
            },
            pending: false,
        };
    };

    addPromoCode = async (promoCode: string): CheckoutResponse => {
        const checkoutId = this.mzawadieState.checkout?.id;

        if (checkoutId) {
            const { data, dataError } = await this.jobsManager.run("checkout", "addPromoCode", {
                checkoutId,
                promoCode,
            });

            return {
                data,
                dataError,
                pending: false,
            };
        }
        return {
            functionError: {
                error: new Error("You need to set shipping address before modifying promo code."),
                type: FunctionErrorCheckoutTypes.SHIPPING_ADDRESS_NOT_SET,
            },
            pending: false,
        };
    };

    removePromoCode = async (promoCode: string): CheckoutResponse => {
        const checkoutId = this.mzawadieState.checkout?.id;

        if (checkoutId) {
            const { data, dataError } = await this.jobsManager.run("checkout", "removePromoCode", {
                checkoutId,
                promoCode,
            });

            return {
                data,
                dataError,
                pending: false,
            };
        }
        return {
            functionError: {
                error: new Error("You need to set shipping address before modifying promo code."),
                type: FunctionErrorCheckoutTypes.SHIPPING_ADDRESS_NOT_SET,
            },
            pending: false,
        };
    };

    createPayment = async (input: CreatePaymentInput): CheckoutResponse => {
        const checkoutId = this.mzawadieState.checkout?.id;
        const amount = this.mzawadieState.summaryPrices?.totalPrice?.gross.amount;

        if (checkoutId && amount !== null && amount !== undefined) {
            const { data, dataError } = await this.jobsManager.run("checkout", "createPayment", {
                ...input,
                amount,
                checkoutId,
            });
            return {
                data,
                dataError,
                pending: false,
            };
        }
        return {
            functionError: {
                error: new Error("You need to set billing address before creating payment."),
                type: FunctionErrorCheckoutTypes.SHIPPING_ADDRESS_NOT_SET,
            },
            pending: false,
        };
    };

    completeCheckout = async (input?: CompleteCheckoutInput): CheckoutResponse => {
        const checkoutId = this.mzawadieState.checkout?.id;

        if (checkoutId) {
            const { data, dataError } = await this.jobsManager.run("checkout", "completeCheckout", {
                ...input,
                checkoutId,
            });
            return {
                data,
                dataError,
                pending: false,
            };
        }
        return {
            functionError: {
                error: new Error("You need to set shipping address before creating payment."),
                type: FunctionErrorCheckoutTypes.SHIPPING_ADDRESS_NOT_SET,
            },
            pending: false,
        };
    };
}

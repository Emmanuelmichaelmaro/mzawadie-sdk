import { MzawadieState } from "../../state";
import { LocalRepository } from "../LocalRepository";
import { ICheckoutRepositoryManager } from "./types";

export class CheckoutRepositoryManager implements ICheckoutRepositoryManager {
    private repository: LocalRepository;

    private mzawadieState: MzawadieState;

    constructor(repository: LocalRepository, mzawadieState: MzawadieState) {
        this.repository = repository;
        this.mzawadieState = mzawadieState;
    }

    getRepository = () => {
        return this.repository;
    };

    addItemToCart = (variantId: string, quantity: number) => {
        const lines = this.mzawadieState.checkout?.lines || [];
        let variant = lines.find((variant: any) => variant.variant.id === variantId);
        const alteredLines = lines.filter((variant: any) => variant.variant.id !== variantId);
        const newVariantQuantity = variant ? variant.quantity + quantity : quantity;
        if (variant) {
            variant.quantity = newVariantQuantity;
            alteredLines.push(variant);
        } else {
            variant = {
                quantity,
                variant: {
                    id: variantId,
                },
            };
            alteredLines.push(variant);
        }
        const alteredCheckout = this.mzawadieState.checkout
            ? {
                  ...this.mzawadieState.checkout,
                  lines: alteredLines,
              }
            : {
                  lines: alteredLines,
              };
        this.repository.setCheckout(alteredCheckout);

        return alteredCheckout;
    };

    removeItemFromCart = (variantId: string) => {
        const lines = this.mzawadieState.checkout?.lines || [];
        const variant = lines.find((variant: any) => variant.variant.id === variantId);
        const alteredLines = lines.filter((variant: any) => variant.variant.id !== variantId);
        if (variant) {
            variant.quantity = 0;
            alteredLines.push(variant);
        }
        const alteredCheckout = this.mzawadieState.checkout
            ? {
                  ...this.mzawadieState.checkout,
                  lines: alteredLines,
              }
            : {
                  lines: alteredLines,
              };
        this.repository.setCheckout(alteredCheckout);

        return alteredCheckout;
    };

    subtractItemFromCart = (variantId: string) => {
        const lines = this.mzawadieState.checkout?.lines || [];
        const variant = lines.find((variant: any) => variant.variant.id === variantId);
        const alteredLines = lines.filter((variant: any) => variant.variant.id !== variantId);
        const newVariantQuantity = variant ? variant.quantity - 1 : 0;
        if (variant) {
            variant.quantity = newVariantQuantity;
            alteredLines.push(variant);
        }
        const alteredCheckout = this.mzawadieState.checkout
            ? {
                  ...this.mzawadieState.checkout,
                  lines: alteredLines,
              }
            : {
                  lines: alteredLines,
              };
        this.repository.setCheckout(alteredCheckout);

        return alteredCheckout;
    };

    updateItemInCart = (variantId: string, quantity: number) => {
        const lines = this.mzawadieState.checkout?.lines || [];
        const variant = lines.find((variant: any) => variant.variant.id === variantId);
        const alteredLines = lines.filter((variant: any) => variant.variant.id !== variantId);
        if (variant) {
            variant.quantity = quantity;
            alteredLines.push(variant);
        }
        const alteredCheckout = this.mzawadieState.checkout
            ? {
                  ...this.mzawadieState.checkout,
                  lines: alteredLines,
              }
            : {
                  lines: alteredLines,
              };
        this.repository.setCheckout(alteredCheckout);

        return alteredCheckout;
    };
}

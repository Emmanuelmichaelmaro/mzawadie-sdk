import { LocalStorageHandler } from "../../helpers/LocalStorageHandler";
import { MzawadieState } from "../../state";

export class LocalStorageManager {
    private handler: LocalStorageHandler;

    private mzawadieState: MzawadieState;

    constructor(handler: LocalStorageHandler, mzawadieState: MzawadieState) {
        this.handler = handler;
        this.mzawadieState = mzawadieState;
    }

    getHandler = () => {
        return this.handler;
    };

    addItemToCart = (variantId: string, quantity: number) => {
        const lines = this.mzawadieState.checkout?.lines || [];
        let variantInCheckout = lines.find((variant) => variant.variant.id === variantId);
        const alteredLines = lines.filter((variant) => variant.variant.id !== variantId);
        const newVariantQuantity = variantInCheckout ? variantInCheckout.quantity + quantity : quantity;
        if (variantInCheckout) {
            variantInCheckout.quantity = newVariantQuantity;
            alteredLines.push(variantInCheckout);
        } else {
            variantInCheckout = {
                quantity,
                variant: {
                    id: variantId,
                },
            };
            alteredLines.push(variantInCheckout);
        }
        const alteredCheckout = this.mzawadieState.checkout
            ? {
                  ...this.mzawadieState.checkout,
                  lines: alteredLines,
              }
            : {
                  lines: alteredLines,
              };
        this.handler.setCheckout(alteredCheckout);

        return alteredCheckout;
    };

    removeItemFromCart = (variantId: string) => {
        const lines = this.mzawadieState.checkout?.lines || [];
        const variantInCheckout = lines.find((variant) => variant.variant.id === variantId);
        const alteredLines = lines.filter((variant) => variant.variant.id !== variantId);
        if (variantInCheckout && this.mzawadieState.checkout) {
            variantInCheckout.quantity = 0;
            alteredLines.push(variantInCheckout);
        }
        const alteredCheckout = this.mzawadieState.checkout
            ? {
                  ...this.mzawadieState.checkout,
                  lines: alteredLines,
              }
            : {
                  lines: alteredLines,
              };
        this.handler.setCheckout(alteredCheckout);

        return alteredCheckout;
    };

    subtractItemFromCart = (variantId: string) => {
        const lines = this.mzawadieState.checkout?.lines || [];
        const variantFromCart = lines.find((variant) => variant.variant.id === variantId);
        const alteredLines = lines.filter((variant) => variant.variant.id !== variantId);
        const newVariantQuantity = variantFromCart ? variantFromCart.quantity - 1 : 0;
        if (variantFromCart) {
            variantFromCart.quantity = newVariantQuantity;
            alteredLines.push(variantFromCart);
        }
        const alteredCheckout = this.mzawadieState.checkout
            ? {
                  ...this.mzawadieState.checkout,
                  lines: alteredLines,
              }
            : {
                  lines: alteredLines,
              };
        this.handler.setCheckout(alteredCheckout);

        return alteredCheckout;
    };

    updateItemInCart = (variantId: string, quantity: number) => {
        const lines = this.mzawadieState.checkout?.lines || [];
        const variantInCheckout = lines.find((variant) => variant.variant.id === variantId);
        const alteredLines = lines.filter((variant) => variant.variant.id !== variantId);
        if (variantInCheckout) {
            variantInCheckout.quantity = quantity;
            alteredLines.push(variantInCheckout);
        }
        const alteredCheckout = this.mzawadieState.checkout
            ? {
                  ...this.mzawadieState.checkout,
                  lines: alteredLines,
              }
            : {
                  lines: alteredLines,
              };
        this.handler.setCheckout(alteredCheckout);

        return alteredCheckout;
    };
}

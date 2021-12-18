import { hookFactory } from "./useHook";

/**
 * React hook to get client's config methods
 *
 * @returns Mzawadie's client's config methods
 */
// export const useMzawadieConfig = hookFactory("config");

/**
 * React hook to get authorization methods
 *
 * @returns Mzawadie's authorization methods
 */
export const useAuth = hookFactory("auth");

/**
 * React hook to get user's account methods
 *
 * @returns Mzawadie's user's account methods
 */
// export const useUser = hookFactory("user");

/**
 * React hook to get checkout methods
 *
 * @returns Mzawadie's checkout methods
 */
export const useCheckout = hookFactory("checkout");

/**
 * React hook to get cart methods
 *
 * @returns Mzawadie's cart methods
 */
export const useCart = hookFactory("cart");

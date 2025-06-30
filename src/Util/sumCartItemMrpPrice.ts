import { CartItemType } from "../types/cartTypes";

export const sumCartItemMrpPrice = (cartItems: CartItemType[]) => {
  return cartItems.reduce(
    (acc, item) => acc + item.mrpPrice * item.quantity,
    0
  );
};

export const sumCartItemSellingPrice = (cartItems: CartItemType[]) => {
  return cartItems.reduce(
    (acc, item) => acc + item.sellingPrice * item.quantity,
    0
  );
};

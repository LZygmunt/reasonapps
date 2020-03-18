import {
  CHANGE_CART,
  TOGGLE_SHOW_CART
} from "../constans";
export const toggleShowCart = () => ({
  type: TOGGLE_SHOW_CART
});

export const changeCart = cart => ({
  type: CHANGE_CART,
  payload: cart
});

import { CHANGE_CART, TOGGLE_SHOW_CART } from "../constans";

const initialState = {
  cart: [],
  show: false
};

export const cartModification = ( state = initialState, action ) => {
  switch ( action.type ) {
    case TOGGLE_SHOW_CART:
      return {
        ...state,
        show: !state.show
      };
    case CHANGE_CART:
      return {
        ...state,
        cart: action.payload
      };
    default:
      return state;
  }
};

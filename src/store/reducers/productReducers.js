import {
  REQUEST_PRODUCTS_FAILED,
  REQUEST_PRODUCTS_PENDING,
  REQUEST_PRODUCTS_SUCCESS, SEARCH_PRODUCTS
} from "../constans";

const initialState = {
  products: [],
  isPending: false,
  error: "",
  searchValue: ""
};

export const requestProducts = ( state = initialState, action ) => {
  switch ( action.type ) {
    case REQUEST_PRODUCTS_PENDING:
      return {
        ...state,
        isPending: true
      };
    case REQUEST_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isPending: false
      };
    case REQUEST_PRODUCTS_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false
      };
    default:
      return state;
  }
};

export const searchProducts = ( state = initialState , action ) => {
  switch ( action.type ) {
    case SEARCH_PRODUCTS:
      return {
        ...state,
        searchValue: action.payload
      };
    default:
      return state
  }
};

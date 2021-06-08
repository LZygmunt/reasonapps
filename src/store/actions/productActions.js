import {
  API,
  REQUEST_PRODUCTS_FAILED,
  REQUEST_PRODUCTS_PENDING,
  REQUEST_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS
} from "../constans";

export const requestProducts = () => dispatch => {
  dispatch({ type: REQUEST_PRODUCTS_PENDING });

  fetch( API )
    .then( res => res.json())
    .then( data => dispatch({ type: REQUEST_PRODUCTS_SUCCESS, payload: data }))
    .catch( err => dispatch({ type: REQUEST_PRODUCTS_FAILED, payload: err }));
};

export const searchProducts = value => ({
  type: SEARCH_PRODUCTS,
  payload: value
});

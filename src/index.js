import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { requestProducts, searchProducts } from "./store/reducers/productReducers";
import { cartModification } from "./store/reducers/cartReducers";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import App from './App';

import * as serviceWorker from './serviceWorker';
import './index.css';

library.add( faShoppingCart, faSearch );

const rootReducer = combineReducers({
  requestProducts,
  searchProducts,
  cartModification
});
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk
));

ReactDOM.render(
  <Provider store={ store }><App/></Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

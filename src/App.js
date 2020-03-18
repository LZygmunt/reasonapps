import React from 'react';
import { connect } from "react-redux";
import { requestProducts, searchProducts } from "./store/actions/productActions";
import ProductsContainer from "./containers/product/ProductsContainer";
import CartContainer from "./containers/cart/CartContainer";
import Header from "./components/header/Header";
import { changeCart, toggleShowCart } from "./store/actions/cartActions";
import Loader from "./components/loader/Loader";

const mapStateToProps = state => ({
  products: state.requestProducts.products,
  isPending: state.requestProducts.isPending,
  error: state.requestProducts.error,
  searchValue: state.searchProducts.searchValue,
  cart: state.cartModification.cart,
  showCart: state.cartModification.show
});

const mapDispatchToProps = dispatch => ({
  requestProducts: () => dispatch( requestProducts()),
  searchProducts: evt => dispatch( searchProducts( evt.target.value)),
  changeCart: cart => dispatch( changeCart( cart )),
  toggleShowCart: () => dispatch( toggleShowCart())
});

const App = props => (
  <>
    <Header { ...props }/>
    <ProductsContainer { ...props }/>
    <CartContainer { ...props } />
    { props.isPending && <Loader/> }
    { props.error !== '' && <h1 style={{ position: "relative", top: "3em" }}>
      Error occurred while application loading. Please try again later...
    </h1> }
  </>
);

export default connect( mapStateToProps, mapDispatchToProps )( App );

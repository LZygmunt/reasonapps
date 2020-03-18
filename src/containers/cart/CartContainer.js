import React, { Component } from 'react';
import ProductsList from "../../components/product/ProductsList";

import "./scss/cart-container.scss"

class CartContainer extends Component {
  handleClick = payload => {
    let cart = [ ...this.props.cart ];

    if ( payload.count === 0 ) {
      cart = cart.filter( product => product.id !== payload.id );
    } else if ( payload.count > 0) {
      let index = cart.findIndex( product => product.id === payload.id );
      cart[ index ] = payload;
    }

    this.props.changeCart( cart );
  };

  render () {
    return (
      <div id="cart-container" className={ this.props.showCart ? "show" : "" }>
        <ProductsList
          products={ this.props.cart }
          container="cart"
          handleClick={ this.handleClick }
        />
      </div>
    );
  }
}

export default CartContainer;

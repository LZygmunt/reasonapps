import React, { Component } from 'react';
import ProductsList from "../../components/product/ProductsList";

import "./scss/products-container.scss"

class ProductsContainer extends Component {

  componentDidMount = async () => {
    this.props.requestProducts();
  };

  filteredProducts = products => products.filter(
    product => product.name.toLowerCase().includes( this.props.searchValue.toLowerCase())
  );

  handleClick = product => {
    let cart = [ ...this.props.cart ];
    let index = cart.findIndex( item => item.id === product.id );

    if ( index > -1 ) {
      cart[ index ].count++;
    } else {
      cart.push({ ...product, count: 1 });
    }
    this.props.changeCart( cart );
  };

  render () {
    return (
      <div id="products-container" className={this.props.showCart ? 'block-scroll': ''}>
        <ProductsList
          products={ this.filteredProducts( this.props.products )}
          container="product"
          handleClick={ this.handleClick }
        />
      </div>
    );
  }
}

export default ProductsContainer;

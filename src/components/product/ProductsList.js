import React from 'react';
import ProductItem from "./ProductItem";

const ProductsList = props => {
  let count, sum;
  if ( props.container === "cart" ) {
    count = props.products.map( product => product.count )
      .reduce(( accu, val ) => accu + val, 0 );
    sum = props.products.map( product => product.count * product.price )
      .reduce(( accu, val ) => accu + val, 0 );
  }

  return (
    <>
      { props.container === "cart" && <div id="summary">
        <p id="count">COUNT: { count }</p>
        <p id="price">{ Math.round( sum * 100 ) / 100 }$</p>
      </div> }
      { props.products.map(
        item => <ProductItem
          key={ item.id }
          product={ item }
          children={ props.children }
          item={ props.container }
          handleClick={ props.handleClick }
        />
      )}
    </>
  );
};

export default ProductsList;

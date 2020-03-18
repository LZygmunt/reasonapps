import React from 'react';

import "./scss/product-item.scss"

const ProductItem = props => {
  return (
    <div className="product-item">
      <p className="name">{ props.product.name }</p>
      { props.item === "product" &&
        <>
          <p className="price">{ props.product.price }$</p>
          <div className="back-drop"/>
          <button onClick={() => props.handleClick( props.product )}>ADD TO CART</button>
        </>
      }
      { props.item === "cart" &&
      <>
        <button
          className="plus"
          onClick={() => props.handleClick({
            ...props.product,
            count: props.product.count + 1
          })}
        >+</button>
        <button
          className="delete"
          onClick={() => props.handleClick({
            ...props.product,
            count: 0
          })}
        >X</button>
        <p className="count">Count: { props.product.count }</p>
        <p className="sum">{ Math.round( props.product.count * props.product.price * 100 ) / 100 }$</p>
        <button
          className="minus"
          onClick={() => props.handleClick({
            ...props.product,
            count: props.product.count - 1
          })}
        />
      </>
      }
    </div>
  );
};

export default ProductItem;

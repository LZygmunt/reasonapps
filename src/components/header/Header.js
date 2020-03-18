import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./scss/header.scss"

class Header extends React.Component {
  state = {
    showInput: false
  };

  handleClick = value => {
    if ( value === "search" ) {
      this.setState( prevState => ({ showInput: !prevState.showInput }));
    } else if ( value === "cart" ) {
      this.props.toggleShowCart();
    }
  };

  render () {
    let styleSearch = this.state.showInput
      ? { color: "#6cb3d7" }
      : {};
    let styleCart = this.props.showCart
      ? { color: "#6cb3d7" }
      : {};

    return (
      <div id="header">
        <h1 id="logo">Logo</h1>
        <p id="search">
          <label>
            <input
              type="text"
              name="search"
              className={ this.state.showInput ? "show" : "" }
              placeholder="Type product name..."
              value={ this.props.searchValue }
              onChange={ this.props.searchProducts }
            />
          </label>
          <span
            onClick={() => this.handleClick( 'search' )}
            style={ styleSearch }
          >
            <FontAwesomeIcon icon={ [ 'fas', 'search' ] }/>
          </span>
        </p>
        <span
          id="cart"
          onClick={() => this.handleClick( 'cart' )}
          style={ styleCart }
        >
          <FontAwesomeIcon icon={ [ 'fas', 'shopping-cart' ] }/>
        </span>
      </div>
    );
  }
}

export default Header;

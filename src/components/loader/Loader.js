import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './scss/loader.scss'

const Loader = () => {
  return (
    <div id="loader">
      <div>
        <span id="first">
          <FontAwesomeIcon icon={[ 'fas', 'shopping-cart' ] }/>
        </span>
        <span id="second">
          <FontAwesomeIcon icon={[ 'fas', 'shopping-cart' ] }/>
        </span>
        <span id="third"><
          FontAwesomeIcon icon={[ 'fas', 'shopping-cart' ] }/>
        </span>
      </div>
    </div>
  );
};

export default Loader;

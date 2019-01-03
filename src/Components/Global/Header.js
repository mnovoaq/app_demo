//Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from "materialize-css/dist/js/materialize.min.js";

//Assets
import "materialize-css/dist/css/materialize.min.css";

import './css/Header.css';

class Header extends Component {

  render() {
    return (
      <div className="Header">
        <nav>
          <div className="nav-wrapper">

          <Link to=""><img src={require('../Global/images/slidery_logo.svg')} alt="img" width="24%"/></Link>
            <ul id="nav-mobile" className="right">
              <li><a href="sass.html">7600 Slids</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;

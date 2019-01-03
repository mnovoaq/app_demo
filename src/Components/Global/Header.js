//Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Assets

import './css/Header.css';

class Header extends Component {

  render() {
    return (
      <div className="Header">
        <nav>
          <div className="nav-wrapper">

          <Link to=""><img src={require('../Global/images/slidery_logo.svg')} alt="img" width="24%"/></Link>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;

//Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


//Assets
import "materialize-css/dist/css/materialize.min.css";

import './css/Header.css';

class Header extends Component {

  render() {
    return (
      <div className="Header">
          <nav>
            <div className="nav-wrapper">
            <ul className="ul-left left">
              <li>
                <button  data-target="slide-out" className="sidenav-trigger btn-side">
                    <i className="material-icons">menu</i>
                </button>
              </li>
                <li>
                  <Link to="" >
                    <img className="img-logo responsive-img  "
                     src={require('../Global/images/slidery_logo.svg')} align="left" alt="img" width="65"/>
                  </Link>
                </li>
            </ul>

            <ul id="nav-mobile" className="ul-right right">
              <li><img src={require('../Global/images/slid.svg')} alt="img" width="14"/></li>
              <li><Link to="">7.600 </Link></li>
              <li><img src={require('../Global/images/superslid.svg')} alt="img" width="14"/></li>
                <li><Link to="">1.200</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;

//Dependecies
import React, { Component } from "react";
import { Link } from 'react-router-dom';

//Assets
import "materialize-css/dist/css/materialize.min.css";

//Components
class Bottombar extends Component {
    render() {      
        return (
            <div>
              <ul className="Bottombar">
                <li>
                  <Link to="/cupones">  <img src={require('../Global/images/ico_games.svg')} alt="img" width="100%"/></Link>
                </li>
                <li>
                  <Link to="/cupones">  <img src={require('../Global/images/ico_travel.svg')} alt="img" width="100%"/></Link>
                </li>
                <li>
                  <Link to="/cupones">  <img src={require('../Global/images/ico_beauty.svg')} alt="img" width="100%"/></Link>
                </li>
                <li>
                  <Link to="/cupones">  <img src={require('../Global/images/ico_tecno.svg')} alt="img" width="100%"/></Link>
                </li>
                <li>
                  <Link to="/cupones">  <img src={require('../Global/images/ico_baby.svg')} alt="img" width="100%"/></Link>
                </li>
                <li>
                  <Link to="/cupones">  <img src={require('../Global/images/ico_funny.svg')} alt="img" width="100%"/></Link>
                </li>
                <li>
                  <Link to="/cupones">  <img src={require('../Global/images/ico_food.svg')} alt="img" width="100%"/></Link>
                </li>
              </ul>

            </div>
        );
    }
}

export default Bottombar;

//Dependecies
import React, { Component } from "react";
import { Link } from 'react-router-dom';

//Assets
import "materialize-css/dist/css/materialize.min.css";

//Components

class Slidecoupon extends Component {
    render() {
        return (

            <div className="carousel">
              <span className="coupon-title text-resp"><strong>Cupones</strong> Tecnología</span>
              <Link className="carousel-item" to="#four!"><img src={require('../Global/images/p4.jpg')} alt="img" /></Link>
              <Link className="carousel-item" to="#four!"><img src={require('../Global/images/p4.jpg')} alt="img" /></Link>
              <Link className="carousel-item" to="#four!"><img src={require('../Global/images/p4.jpg')} alt="img" /></Link>
              <Link className="carousel-item" to="#four!"><img src={require('../Global/images/p4.jpg')} alt="img" /></Link>
              <Link className="carousel-item" to="#four!"><img src={require('../Global/images/p4.jpg')} alt="img" /></Link>


            </div>
        );
    }
}

export default Slidecoupon;

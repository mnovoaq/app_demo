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
              <Link className="carousel-item" to="#one!"><img src={require('../Global/images/p1.jpg')} alt="img" /></Link>
              <Link className="carousel-item" to="#two!"><img src={require('../Global/images/p2.jpg')} alt="img" /></Link>
              <Link className="carousel-item" to="#three!"><img src={require('../Global/images/p3.jpg')} alt="img" /></Link>
              <Link className="carousel-item" to="#four!"><img src={require('../Global/images/p4.jpg')} alt="img" /></Link>
              <Link className="carousel-item" to="#five!"><img src={require('../Global/images/p5.jpg')} alt="img" /></Link>
            </div>


        );
    }
}

export default Slidecoupon;

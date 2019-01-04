//Dependecies
import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from 'react-router-dom';

//Assets
import "materialize-css/dist/css/materialize.min.css";
import "../Global/css/App.css";

//Components
import Modal from '../Global/Modal';
import Header from '../Global/Header';
import Bottombar from '../Global/Bottombar';
import Countdown from '../Global/Countdown';
import Slidecoupon from '../Global/Slidecoupon';

  class Cupones extends Component{
    render(){
      return (
        <div className="row">
          <Header />
          <div className=" row-content">
            <div className="col s6">
              <Link className="carousel-item" to="#one!" ><img className="responsive-img" src={require('../Global/images/p1.jpg')} alt="img" /></Link>
              <Link className="carousel-item" to="#one!" ><img className="responsive-img" src={require('../Global/images/p2.jpg')} alt="img" /></Link>
              <Link className="carousel-item" to="#one!" ><img className="responsive-img" src={require('../Global/images/p3.jpg')} alt="img" /></Link>
              <Link className="carousel-item" to="#one!" ><img className="responsive-img" src={require('../Global/images/p1.jpg')} alt="img" /></Link>
              <Link className="carousel-item" to="#one!" ><img className="responsive-img" src={require('../Global/images/p2.jpg')} alt="img" /></Link>
              <Link className="carousel-item" to="#one!" ><img className="responsive-img" src={require('../Global/images/p3.jpg')} alt="img" /></Link>

            </div>
            <div className="col s6">
              <Link className="carousel-item" to="#one!" ><img className="responsive-img" src={require('../Global/images/p5.jpg')} alt="img" /></Link>
              <Link className="carousel-item" to="#one!" ><img className="responsive-img" src={require('../Global/images/p4.jpg')} alt="img" /></Link>
              <Link className="carousel-item" to="#one!" ><img className="responsive-img" src={require('../Global/images/p1.jpg')} alt="img" /></Link>
              <Link className="carousel-item" to="#one!" ><img className="responsive-img" src={require('../Global/images/p1.jpg')} alt="img" /></Link>
              <Link className="carousel-item" to="#one!" ><img className="responsive-img" src={require('../Global/images/p2.jpg')} alt="img" /></Link>
              <Link className="carousel-item" to="#one!" ><img className="responsive-img" src={require('../Global/images/p3.jpg')} alt="img" /></Link>

            </div>
          </div>
          <Bottombar />
        </div>
      );
    }
  }

export default Cupones;

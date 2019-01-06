//Dependecies
import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

//Assets
import "materialize-css/dist/css/materialize.min.css";
import "../Global/css/App.css";

//Components
import Modal from '../Global/Modal';
import Header from '../Global/Header';
import Bottombar from '../Global/Bottombar';
import Countdown from '../Global/Countdown';
import SlidecouponTecno from '../Global/SlidecouponTecno';

//Load Carousel
    document.addEventListener('DOMContentLoaded', function() {
       var elems = document.querySelectorAll('.carousel');
       M.Carousel.init(elems );
     });

 const currentDate = new Date();
 const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
  class Cupones extends Component{
    render(){
      return (
        <div className="">
          <Header />
          <div className="row-content">

          <SlidecouponTecno  />
          <Countdown date={`${year}-12-24T00:00:00`} />
          <Modal />
          </div>
          <Bottombar />
        </div>
      );
    }
  }

export default Cupones;

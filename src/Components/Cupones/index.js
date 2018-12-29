//Dependecies
import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from 'react-router-dom';

//Assets
import "materialize-css/dist/css/materialize.min.css";

document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.carousel');
   M.Carousel.init(elems);
 });

class Cupones extends Component{
  render(){
    return (
      <div className="Cupones">

<div className="carousel">
  <Link className="carousel-item" to="#one!"><img src="https://lorempixel.com/250/250/nature/1" alt="cupon" /></Link>
  <Link className="carousel-item" to="#two!"><img src="https://lorempixel.com/250/250/nature/2" alt="cupon" /></Link>
  <Link className="carousel-item" to="#three!"><img src="https://lorempixel.com/250/250/nature/3" alt="cupon" /></Link>
  <Link className="carousel-item" to="#four!"><img src="https://lorempixel.com/250/250/nature/4" alt="cupon" /></Link>
  <Link className="carousel-item" to="#five!"><img src="https://lorempixel.com/250/250/nature/5" alt="cupon" /></Link>
</div>
      </div>
    );
  }
}

export default Cupones;

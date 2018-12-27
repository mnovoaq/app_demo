//Dependecies
import React, { Component } from 'react';


import Formlogin from './Formlogin';

class Home extends Component{
  render() {
    return (
      <div className="Home">
        <h1>Home Page</h1>
        <Formlogin />
      </div>
    );
  }
}

export default Home;

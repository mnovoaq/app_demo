//Dependecies
import React, { Component } from 'react';


import Formlogin from './Formlogin';

class Home extends Component{
  render() {
    return (
      <div className="Home">
        <img src={require('../Global/images/gift.png')} alt="img" width="80%"/>
        <img src={require('../Global/images/slidery_logo.svg')} alt="img" width="60%"/>
        <Formlogin />
      </div>
    );
  }
}

export default Home;

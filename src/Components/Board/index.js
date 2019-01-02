//Dependecies
import React, { Component } from 'react';

//Assets
import '../Global/css/special.css';

//Components
import Bottombar from '../Global/Bottombar';

class Board extends Component{
  render() {
    return (
      <div className="Board">
        <img src={require('../Global/images/gift.png')} alt="img" width="80%"/>
        <img src={require('../Global/images/slidery_logo.svg')} alt="img" width="60%"/>
        <Bottombar />
      </div>
    );
  }
}

export default Board;

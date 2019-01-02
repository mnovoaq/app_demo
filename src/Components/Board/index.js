//Dependecies
import React, { Component } from 'react';

//Assets
import '../Global/css/special.css';

//Components
import Header from '../Global/Header';
import Bottombar from '../Global/Bottombar';

class Board extends Component{
  render() {
    return (
      <div className="Board">
        <Header />
        <Bottombar />
      </div>
    );
  }
}

export default Board;

//Dependecies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <img src={require('../Global/images/gift.png')} alt="img" width="60%"/>
        <div className="row row-board r-1 border-dott valign-wrapper">
          <div className="col s6 valign left">
          <span className="text-resp" align="left">Actualmente
          tu saldo es</span>
          </div>
          <div className="col s6 valign">
            <h4>6.700</h4>
            <span className="text-resp">Slids</span>
          </div>
        </div>
        <div className="row row-board-2 r-2  valign-wrapper">
          <div className="col s4 valign  border-dott border-nodott-top">
            <Link to="./Cupones"><i class="material-icons dp48">alarm</i><br />
            <span className="text-resp" align="left">Hot Cupones</span>
            </Link>
          </div>

          <div className="col s4 valign  border-dott border-nodott-top border-nodott-left border-nodott-right">
            <Link to="./cupones">
              <i class="material-icons dp48">receipt</i><br />
              <span className="text-resp" align="left">Mis cupones</span>
            </Link>
          </div>

          <div className="col s4 valign  border-dott border-nodott-top">
            <Link to="./cupones">
            <i class="material-icons dp48">monetization_on </i><br />
            <span className="text-resp" align="left">Mi Billetera</span>
            </Link>
          </div>

        </div>

        <Bottombar />
      </div>
    );
  }
}

export default Board;

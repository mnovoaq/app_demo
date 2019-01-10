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
      <div className="">
        <Header />
      <div className="Board row-content">
        <h6 className="white-text marv-15">Bienvenido<span className="fweight-800"> Mitchel</span></h6>
        <div className="input-field col s12" align="center">
          <input placeholder="Buscar cupón" type="search"  />
        </div>
        <div className="row row-board r-1 border-dott valign-wrapper">
          <div className="col s6 valign left">
          <h4 className="text-resp" align="left">Actualmente <br/>
          <span className="fweight-800">tienes</span></h4>
          </div>
          <div className="col s6 valign">
            <h4 className="fweight-600">7.600</h4><img src={require('../Global/images/slid.svg')} className="responsive-img" alt="img" width="20"/>
            <small className="valign">&nbsp;Slids</small>
          </div>
        </div>
        <div className="row row-board-2 r-2  valign-wrapper">
          <div className="col s4 valign  border-dott border-nodott-top pad-20">
            <Link to="./Cupones">
            <img src={require('../Global/images/fire.svg')} className="responsive-img" alt="img" width="27"/><br/>
            <h4 className="text-resp lheight-1 mar-0 tcenter" align="left">Hot <span className="fweight-800">Slids</span></h4>
            </Link>
          </div>

          <div className="col s4 valign  border-dott border-nodott-top pad-20 border-nodott-left border-nodott-right">
            <Link to="./cupones">
              <img src={require('../Global/images/superslid.svg')} className="responsive-img" alt="img" width="25"/><br/>
              <h6 className="lheight-0"><strong>1.200</strong></h6>
              <small className="fweight-300"  align="left">Super Slids</small>
            </Link>
          </div>

          <div className="col s4 valign  border-dott border-nodott-top pad-20">
            <Link to="./cupones">
              <img src={require('../Global/images/gift2.svg')} className="responsive-img" alt="img" width="27"/><br/>
            <h4 className="text-resp lheight-1 mar-0 tcenter" align="left">Mis <span className="fweight-800">Cupones</span></h4>
            </Link>
          </div>
        </div>

        <div className="row row-board-2 r-2  valign-wrapper">
          <div className="col s4 valign  border-dott border-nodott-top pad-20">
            <Link to="./Cupones">
            <img src={require('../Global/images/slid.svg')} className="responsive-img" alt="img" width="25"/><br/>
            <h4 className="text-resp lheight-1 mar-0 tcenter" align="left">Hot Cupones</h4>
            </Link>
          </div>

          <div className="col s4 valign  border-dott border-nodott-top pad-20 border-nodott-left border-nodott-right">
            <Link to="./cupones">
              <img src={require('../Global/images/slid.svg')} className="responsive-img" alt="img" width="25"/><br/>
              <h4 className="text-resp lheight-1 mar-0 tcenter" align="left">Super <strong>Slids</strong></h4>
            </Link>
          </div>

          <div className="col s4 valign  border-dott border-nodott-top pad-20">
            <Link to="./cupones">
              <img src={require('../Global/images/slid.svg')} className="responsive-img" alt="img" width="25"/><br/>
            <h4 className="text-resp lheight-1 mar-0 tcenter" align="left">Mis Cupones</h4>
            </Link>
          </div>
        </div>

        </div>

      </div>
    );
  }
}

export default Board;

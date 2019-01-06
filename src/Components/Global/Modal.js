//Dependecies
import React, { Component } from 'react';

const display = {
  display: 'block'
};
const hide = {
  display: 'none'
};

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      toggle: false
    }
  }

  toggle(event) {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  }

  render() {
    var modal = [];
    modal.push(
      <div className="modal " style={this.state.toggle ? display : hide}>
      <div className="modal-conten ">
        <h4>Cupon Sorteo</h4>
        <p>$300 Slids</p>
        <small className="text-resp">Lorem ipsum dolor sit amet, consectetur adipisicing</small>
      </div>
      <div className="modal-footer">
        <a className="btn black" onClick={this.toggle}>Comprar</a>
      </div>
    </div>
    );
    return (
      <div>
        <div className="btn red darken-1" onClick={this.toggle}>ver cupón</div>
        {modal}
      </div>
    );
  }
}


export default Modal;

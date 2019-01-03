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
      <div className="modal-content">
        <h4>Cupon Sorteo</h4>
        <p>$300 Slids</p>
      </div>
      <div className="modal-footer">
        <a className="btn" onClick={this.toggle}>Comprar</a>
      </div>
    </div>
    );
    return (
      <div>
        <a className="btn" onClick={this.toggle}>ver cupón</a>
        {modal}
      </div>
    );
  }
}


export default Modal;

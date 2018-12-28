//Dependecies
import React, { Component } from 'react';


class Formlogin extends Component{
  render(){
    return (

    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input placeholder="Usuario" id="first_name" type="text" className="validate" />
          </div>

          <div className="input-field col s12">
            <input placeholder="Contraseña" id="last_name" type="password" className="validate" />
          </div>
        </div>

      </form>
    </div>

    );
  }
}

export default Formlogin;

//Dependecies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Formlogin extends Component{

  render(){
    return (


    <div className="row form-login">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input placeholder="Usuario" id="first_name" type="text" className="validate" />
          </div>

          <div className="input-field col s12">
            <input placeholder="Contraseña" id="last_name" type="password" className="validate" />
          </div>

          <div className="col s12">
          <Link className="waves-effect  btn-flat btn-login" to="/Cupones">Ingresar</Link>
          <Link className="waves-effect  btn-flat btn-fb" to="/Cupones">Entrar con Facebook</Link>
          </div>

        </div>

      </form>
    </div>

    );
  }
}

export default Formlogin;

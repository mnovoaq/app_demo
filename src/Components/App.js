//Dependecies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './Global/css/App.css';

//Components
import Sidebar from './Global/Sidebar';
import Content from './Global/Content';


//Data
import items from '../data/menu';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const { children } = this.props;
    return (
      <div className="App">

        <Sidebar items={items} />
        <Content body={children} />
      </div>
    );
  }
}

export default App;

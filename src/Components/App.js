//Dependecies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

//Components
import Sidebar from './Global/Sidebar';
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

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
        <Header title="Mi App" items={items} />
        <Sidebar />
        <Content body={children} />
        <Footer copyright="&copy; Mi App 2018" />
      </div>
    );
  }
}

export default App;

//Dependecies
import React, { Component } from 'react';


//Assets

import './Global/css/App.css';
class A extends React.Component{
  componentWillMount(){
    document.getElementById('body').className='darktheme'
  }
    componentWillUnmount(){
    document.getElementById('body').className=''
  }
  render(){
    return (
      <div> Component A </div>
    )
  }
}
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      isAMount: false
    }
  }

  handleClick(){
    this.setState({
      isAMount: !this.state.isAMount
    })
  }

  render(){
    return (
    <div>
        <button onClick={this.handleClick.bind(this)}> Click Me</button>
        <div> App </div>
        <hr />
        <div> {this.state.isAMount && <A /> } </div>
      </div>
    )
  }
}


export default App;

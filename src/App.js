import React, { Component } from 'react';
import Radium from 'radium';
import './App.css';

import Calculator from './Calc/Calc';

class App extends Component{

  render(){
        
    return(
      <Calculator />
    );
  }
}

export default Radium(App);

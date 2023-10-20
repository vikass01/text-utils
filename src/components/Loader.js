import React, { Component } from 'react';
import loader from './images/SVKl.gif'


export class Loader extends Component {
  render() {
    return (
      <div className = "spinner">

        <img src={loader} className = "loader" alt="description of"/>
        
      </div>
    );
  }
}

export default Loader;

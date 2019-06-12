import React, { Component } from 'react';
import logo from '../images/logo.png';

class MarkersMenu extends Component {
  render() {
    return (
      <div className="w3-sidebar w3-bar-block sidebar">
        <figure className="menu-logo">
          <img src={logo} alt=""/>
        </figure>
        <a href="#" className="w3-bar-item w3-button">Link 1</a>
        <a href="#" className="w3-bar-item w3-button">Link 2</a>
        <a href="#" className="w3-bar-item w3-button">Link 3</a>
      </div>
    );
  }
}

export default MarkersMenu;

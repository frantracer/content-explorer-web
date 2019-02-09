import React, { Component } from 'react';
import logo from '../images/logo.png';

class MarkersMenu extends Component {
  render() {
    return (
      <div class="w3-sidebar w3-bar-block sidebar">
        <figure class="menu-logo">
          <img src={logo}/>
        </figure>
        <a href="#" class="w3-bar-item w3-button">Link 1</a>
        <a href="#" class="w3-bar-item w3-button">Link 2</a>
        <a href="#" class="w3-bar-item w3-button">Link 3</a>
      </div>
    );
  }
}

export default MarkersMenu;
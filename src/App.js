import React, { Component } from 'react';
import MarkersMenu from "./components/MarkersMenu.js"
import MainView from "./components/MainView.js"

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <MarkersMenu />
        <MainView />
      </div>
    );
  }
}

export default App;
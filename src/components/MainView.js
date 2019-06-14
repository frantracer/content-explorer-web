import React, { Component } from 'react';
import UserMenu from "./UserMenu.js"
import ContentView from "./ContentView.js"

class MainView extends Component {
  render() {
    return (
      <div className="main-view">
        <UserMenu />
        <ContentView />
      </div>
    );
  }
}

export default MainView;

import React, { Component } from 'react';
import UserMenu from "./UserMenu.js"
import GridView from "./GridView.js"

class MainView extends Component {
  render() {
    return (
      <div className="main-view">
        <UserMenu />
        <GridView />
      </div>
    );
  }
}

export default MainView;
import React, { Component } from 'react';
import UserMenu from "./UserMenu.js"
import GridView from "./GridView.js"

class MainView extends Component {
  render() {
    return (
      <div class="main-view">
        <UserMenu />
        <GridView />
      </div>
    );
  }
}

export default MainView;
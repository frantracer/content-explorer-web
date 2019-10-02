import React, { Component } from 'react';
import UserMenu from "./UserMenu.js"
import FilterMenu from "./FilterMenu.js"
import ContentView from "./ContentView.js"

class MainView extends Component {
  render() {
    return (
      <div className="main-view">
        <div>
          <UserMenu />
          <FilterMenu />
        </div>
        <ContentView />
      </div>
    );
  }
}

export default MainView;

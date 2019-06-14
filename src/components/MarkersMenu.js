import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSelectedTopic } from '../redux/actions/actions.js';

import logo from '../images/logo.png';

const mapStateToProps = state => {
  return {
    topics: state.common.topics
  }
};

const mapDispatchToProps = dispatch => {
  return {
    selectTopic : (topic) => { dispatch(setSelectedTopic(topic)) },
  }
}

class MarkersMenu extends Component {
  render() {
    return (
      <div className="w3-sidebar w3-bar-block sidebar">
        <figure className="menu-logo">
          <img src={logo} alt=""/>
        </figure>
        {
          this.props.topics.map((topic, index) => {
              return <button key={index} onClick={() => { return this.props.selectTopic(topic) }} className="w3-bar-item w3-button">{topic}</button>
            }
          )
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkersMenu);

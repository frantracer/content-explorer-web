import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createNewTopic, deleteTopic, setSelectedTopic } from '../redux/actions/actions.js';

import logo from '../images/logo.png';

const mapStateToProps = state => {
  return {
    topics: state.common.topics,
    credentials: state.auth.credentials
  }
};

const mapDispatchToProps = dispatch => {
  return {
    selectTopic: (topic) => { dispatch(setSelectedTopic(topic)) },
    createTopic: (topic) => { dispatch(createNewTopic(topic)) },
    deleteTopic: (topic) => { dispatch(deleteTopic(topic)) }
  }
}

class MarkersMenu extends Component {

  constructor(props) {
    super(props);

    this.state = { newTopicName : "" }

    this.handleNewTopicText = this.handleNewTopicText.bind(this);
  }

  createTopicButton() {
    if(this.props.credentials.sid) {
      return (
      <button id="newTopicButton" onClick={() => this.displayModalDialog("newTopicModalDialog")} className="sidebar-item sidebar-button">
        + New
      </button>
      )
    } else {
      return
    }
  }

  displayModalDialog(id) {
    var element = document.getElementById(id);
    element.style.opacity = 1;
    element.style.pointerEvents = "auto";
  }

  hideModalDialog(id) {
    var element = document.getElementById(id);
    element.style.opacity = 0;
    element.style.pointerEvents = "none";
  }

  handleNewTopicText(event) {
    this.setState({newTopicName: event.target.value});
  }
  
  createTopicModalWindow() {
    if(this.props.credentials.sid) {
      return (
        <div id="newTopicModalDialog" className="modal-dialog">
          <div>
            <input type="text" value={this.state.newTopicName} onChange={this.handleNewTopicText}/>
            <br/>
            <button onClick={() => {
              this.setState({newTopicName: ""})
              this.hideModalDialog("newTopicModalDialog");
            }}>Cancel</button>
            <button onClick={() => {
              this.props.createTopic(this.state.newTopicName);
              this.setState({newTopicName: ""});
              this.hideModalDialog("newTopicModalDialog");
            }}>Create</button>
          </div>
        </div>
      )
    } else {
      return
    }
  }

  render() {
    return (
      <div>
        <div className="sidebar">
          <figure className="menu-logo">
            <img src={logo} alt=""/>
          </figure>
          {
            this.props.topics.map((topic, index) => {
                return (
                  <div key={index} className="sidebar-item">
                    <button className="sidebar-button sidebar-item-title" onClick={() => { return this.props.selectTopic(topic.name) }}>
                    {topic.name}
                    </button>
                    <button className="sidebar-button sidebar-item-setting" onClick={() => { return this.props.deleteTopic(topic) }}>-</button>
                  </div>
                )
              }
            )
          }
          { this.createTopicButton() }
        </div>
        { this.createTopicModalWindow() }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkersMenu);

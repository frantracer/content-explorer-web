import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadContentItems, createNewTopic, deleteTopic, setSelectedTopic, assignSubscription, removeSubscription } from '../redux/actions/actions.js';

import logo from '../images/logo.png';

const mapStateToProps = state => {
  return {
    topics: state.common.topics,
    subscriptions: state.subs.subscriptions,
    topicSelectedIndex: state.common.topicSelectedIndex,
    credentials: state.auth.credentials
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadContentItems: () => { dispatch(loadContentItems()) },
    selectTopic: (topic) => { dispatch(setSelectedTopic(topic)) },
    createTopic: (topic) => { dispatch(createNewTopic(topic)) },
    deleteTopic: (topic) => { dispatch(deleteTopic(topic)) },
    assignSubscription: (topic, subscription) => { dispatch(assignSubscription(topic, subscription)) },
    removeSubscription: (topic, subscription) => { dispatch(removeSubscription(topic, subscription)) }
  }
}

class MarkersMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newTopicName : "",
      managedTopicIndex : 0,
      subscriptionsFilter : ""
    }

    this.handleNewTopicText = this.handleNewTopicText.bind(this);
    this.subscriptionModalWindow = this.subscriptionModalWindow.bind(this);
    this.handleSubscriptionFilterText = this.handleSubscriptionFilterText.bind(this);
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

  manageSubscriptionCheckbox(event, topic, subscription) {
    if(event.target.checked) {
      this.props.assignSubscription(topic, subscription)
    } else {
      this.props.removeSubscription(topic, subscription)
    }
  }

  handleSubscriptionFilterText(event) {
    this.setState({subscriptionsFilter: event.target.value});
  }

  subscriptionModalWindow() {
    var subscriptions = this.props.subscriptions
    var currentTopic = this.props.topics[this.state.managedTopicIndex]

    if(this.props.credentials.sid && currentTopic != null) {
      return (
        <div id="subscriptionsModalDialog" className="modal-dialog">
          <div>
            <h2>{currentTopic.name}</h2>
            <input type="text" value={this.state.subscriptionsFilter} placeholder="Filter" onChange={this.handleSubscriptionFilterText} className="search-bar"/>
            <form className="selection-window">
              {
                subscriptions.filter(subscription => { return subscription.name.toLowerCase().indexOf(this.state.subscriptionsFilter.toLowerCase()) !== -1 })
                .map((subscription, index) => {
                  return (
                    <div key={currentTopic.id + index} className="checkbox">
                      <label>
                        <input onChange={(event) => this.manageSubscriptionCheckbox(event, currentTopic, subscription)}
                          type="checkbox" checked={ (currentTopic.subscriptions_ids.indexOf(subscription.id) !== -1 ) ? true : false }/>
                          { subscription.name }
                      </label>
                    </div>
                  )
                })
              }
            </form>
            <button onClick={() => {
              this.setState({subscriptionsFilter: ""});
              this.hideModalDialog("subscriptionsModalDialog");
            }}>Done</button>
          </div>
        </div>
      )
    } else {
      return <div id="subscriptionsModalDialog" className="modal-dialog"/>
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
                    <button className="sidebar-button sidebar-item-title" onClick={() => { return this.props.selectTopic(index) }}>
                    { (index === this.props.topicSelectedIndex) ? <b>{topic.name}</b> : topic.name }
                    </button>
                    <button className="sidebar-button sidebar-item-setting" onClick={() => {
                      this.setState({managedTopicIndex : index});
                      this.displayModalDialog("subscriptionsModalDialog")
                      }}
                    >
                      s
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
        { this.subscriptionModalWindow() }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkersMenu);

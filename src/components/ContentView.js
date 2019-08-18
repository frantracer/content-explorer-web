import React, { Component } from 'react';
import GridView from './GridView.js';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    topics: state.common.topics,
    topicSelectedIndex: state.common.topicSelectedIndex,
    credentials: state.auth.credentials
  }
};

const MAX_ITEMS_IN_SUMMARY = 6;

class ContentView extends Component {

  gridViews() {
    if(this.props.credentials) {
      if(this.props.topicSelectedIndex === 0) {
        return this.props.topics.slice(1).map((topic, index) => {
          return <GridView key={index} topic={topic.name} items={topic.feeds.slice(0,MAX_ITEMS_IN_SUMMARY)}/>
        })
      } else {
        var topic = this.props.topics[this.props.topicSelectedIndex]
        return <GridView topic={topic.name} items={topic.feeds}/>
      }
    } else {
      return
    }
  }

  render() {
    return (
      <div>
          { this.gridViews() }
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(ContentView);

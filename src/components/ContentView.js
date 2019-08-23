import React, { Component } from 'react';
import GridView from './GridView.js';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    topics: state.common.topics,
    topicSelectedIndex: state.common.topicSelectedIndex,
    subscriptions: state.subs.subscriptions,
    subscriptionsIndexes: state.subs.subscriptionsIndexes,
    credentials: state.auth.credentials
  }
};

const MAX_ITEMS_IN_SUMMARY = 6;

class ContentView extends Component {

  getSubscriptionById(id) {
    return this.props.subscriptions[this.props.subscriptionsIndexes[id]]
  }

  gridViews() {
    if(this.props.credentials) {
      if(this.props.topicSelectedIndex === 0) {
        return this.props.topics.slice(1).map((topic, index) => {
          var feeds = topic.feeds.slice(0, MAX_ITEMS_IN_SUMMARY).map(feed => {
            return { ...feed, subscription: this.getSubscriptionById(feed.subscription_id) }
          })
          return <GridView key={index} topic={topic.name} items={feeds}/>
        })
      } else {
        var topic = this.props.topics[this.props.topicSelectedIndex]
        var feeds = topic.feeds.map(feed => {
          return { ...feed, subscription: this.getSubscriptionById(feed.subscription_id) }
        })
        return <GridView topic={topic.name} items={feeds}/>
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

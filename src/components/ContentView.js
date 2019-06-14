import React, { Component } from 'react';
import GridView from './GridView.js';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    topicSelected: state.common.topicSelected,
    itemsPerTopic: state.common.itemsPerTopic
  }
};

class ContentView extends Component {

  render() {
    return (
      <div>
          {
            Object.keys(this.props.itemsPerTopic)
            .filter((topic) => (this.props.topicSelected === "Summary" || this.props.topicSelected === topic))
            .map((topic, index) => {
              let items = this.props.itemsPerTopic[topic]
              return <GridView key={index} topic={topic} items={items}/>
            })
          }
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(ContentView);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContentItem from './ContentItem.js';

const mapStateToProps = state => {
  return {
    textFilter: state.filters.textFilter
  }
};

class GridView extends Component {
  render() {
    return (
      <div>
        <div className="grid-title">{this.props.topic}</div>
        <div className="grid">
          {
            this.props.items
            .filter(item => {
              return item.subscription.name.toLowerCase().includes(this.props.textFilter.toLowerCase()) ||
                item.title.toLowerCase().includes(this.props.textFilter.toLowerCase())
            })
            .map( (item, index) => {
              return <ContentItem key={index} title={item.title} src={item.src} type={item.type} thumbnail={item.thumbnail} sub_name={item.subscription.name} sub_src={item.subscription.link} sub_thumbnail={item.subscription.thumbnail}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(GridView);

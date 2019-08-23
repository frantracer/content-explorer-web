import React, { Component } from 'react';
import ContentItem from './ContentItem.js';

class GridView extends Component {
  render() {
    return (
      <div>
        <div className="grid-title">{this.props.topic}</div>
        <div className="grid">
          {
            this.props.items.map( (item, index) => {
              return <ContentItem key={index} title={item.title} src={item.src} type={item.type} thumbnail={item.thumbnail} sub_name={item.subscription.name} sub_src={item.subscription.link} sub_thumbnail={item.subscription.thumbnail}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default GridView;

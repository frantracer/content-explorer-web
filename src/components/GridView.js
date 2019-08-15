import React, { Component } from 'react';
import ContentItem from './ContentItem/ContentItem.js';

class GridView extends Component {

  render() {
    return (
      <div>
        <h2>{this.props.topic}</h2>
        <div className="grid">
          {
            this.props.items.map((item, index) => {
              return <ContentItem key={index} title={item.title} src={item.src} type={item.type} thumbnail={item.thumbnail} />
            })
          }
        </div>
      </div>
    );
  }
}

export default GridView;

import React, { Component } from 'react';
import ContentItem from './ContentItem.js';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
      items: state.common.items
  }
};

class GridView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="grid">
          { this.props.items.map(function(item, index) {
            return <ContentItem key={index} title={item.title} src={item.src} type={item.type}/>
          }) }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(GridView);

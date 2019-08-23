import React, { Component } from 'react';

class ContentItem extends Component {

  render() {
    if (this.props.type === 'youtube') {
      return (
        <div className="grid-item">
          <a href={this.props.src} target="_blank" rel="noopener noreferrer">
            <img className="grid-item-image" alt={this.props.title} src={this.props.thumbnail}/>
          </a>
          <div className="grid-item-title">
            {this.props.title}
          </div>
          <div className="grid-item-text">
            <img className="grid-item-logo" alt={this.props.sub_name} src={this.props.sub_thumbnail}/>
            <a href={this.props.sub_src} target="_blank" rel="noopener noreferrer">
              {this.props.sub_name}
            </a>
          </div>
        </div>
      );
    } else if (this.props.type === 'image') {
      return (
        <figure className="grid-item">
          <img className="grid-item-image" alt={this.props.title} src={this.props.src}/>
        </figure>
      );
    } else {
      return;
    }
  }

}

export default ContentItem;
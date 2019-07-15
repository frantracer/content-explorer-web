import React, { Component } from 'react';

class ContentItem extends Component {

  render() {
    if (this.props.type === 'youtube') {
      return (
        <figure className="grid-item">
          <a href={this.props.src} target="_blank" rel="noopener noreferrer">
            <img className="grid-img" alt={this.props.title} src={this.props.thumbnail}/>
          </a>
          <div style={{ width: "100%", height: "60px" }}>
            <p><b>{this.props.title}</b></p>
          </div>
        </figure>
      );
    } else if (this.props.type === 'image') {
      return (
        <figure className="grid-item">
          <img className="grid-img" alt={this.props.title} src={this.props.src}/>
        </figure>
      );
    } else {
      return;
    }
  }

}

export default ContentItem;
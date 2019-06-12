import React, { Component } from 'react';

class ContentItem extends Component {

  render() {
    if (this.props.type === 'youtube') {
      return (
        <figure className="grid-item">
          <iframe title={this.props.title} width="100%" src={this.props.src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
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
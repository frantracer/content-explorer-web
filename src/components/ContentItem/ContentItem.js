import React, { Component } from 'react';
import YoutubeContentItem from './YoutubeContentItem';
import ImageContentItem from './ImageContentItem';

class ContentItem extends Component {

  render() {
    if (this.props.type === 'youtube') {
      return <YoutubeContentItem {...this.props} />
    } else if (this.props.type === 'image') {
      return <ImageContentItem {...this.props} />
    } else {
      return;
    }
  }
}

export default ContentItem;
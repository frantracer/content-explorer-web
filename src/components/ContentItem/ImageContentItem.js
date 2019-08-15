import React, { Component } from 'react';

class ContentItem extends Component {

    render() {
        return (
            <figure className="grid-item">
                <img className="grid-img" alt={this.props.title} src={this.props.src} />
            </figure>
        );
    }
}

export default ContentItem;
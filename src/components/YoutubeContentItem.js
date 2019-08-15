import React, { Component } from 'react';

class YoutubeContentItem extends Component {

    render() {
        return (
            <figure className="grid-item">
                <a href={this.props.src} target="_blank" rel="noopener noreferrer">
                    <img className="grid-img" alt={this.props.title} src={this.props.thumbnail} />
                </a>
                <div style={{ width: "100%", height: "60px" }}>
                    <p><b>{this.props.title}</b></p>
                </div>
            </figure>
        );
    }
}

export default YoutubeContentItem;
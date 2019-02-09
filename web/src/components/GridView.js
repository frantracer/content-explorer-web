import React, { Component } from 'react';

class GridView extends Component {
  render() {
    return (
      <div>
        <div class="grid">
          <figure class="grid-item">
            <img class="grid-img" src="http://placekitten.com/g/350/200" alt="a kitten"/>
          </figure>
          <figure class="grid-item">
            <img class="grid-img" src="http://placekitten.com/g/350/200" alt="a kitten"/>
          </figure>
          <figure class="grid-item">
            <img class="grid-img" src="http://placekitten.com/g/350/200" alt="a kitten"/>
          </figure>
          <figure class="grid-item">
            <img class="grid-img" src="http://placekitten.com/g/350/200" alt="a kitten"/>
          </figure>
          <figure class="grid-item">
            <img class="grid-img" src="http://placekitten.com/g/350/200" alt="a kitten"/>
          </figure>
          <figure class="grid-item">
            <img class="grid-img" src="http://placekitten.com/g/350/200" alt="a kitten"/>
          </figure>
          <figure class="grid-item">
            <iframe width="100%" src="https://www.youtube.com/embed/uBFKXLxKMDY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
          </figure>
          <figure class="grid-item">
            <iframe width="100%" src="https://www.youtube.com/embed/uBFKXLxKMDY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
          </figure>
          <figure class="grid-item">
            <iframe width="100%" src="https://www.youtube.com/embed/uBFKXLxKMDY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
          </figure>
        </div>
      </div>
    );
  }
}

export default GridView;
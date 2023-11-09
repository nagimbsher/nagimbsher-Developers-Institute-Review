import React, { Component } from "react";

class Example1 extends Component {
  render() {
    return (
      <div>
        <h2>Example1 Component</h2>
        <ul>
          {this.props.socialMedias.map((media, index) => (
            <li key={index}>
              <a href={media}>{media}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;

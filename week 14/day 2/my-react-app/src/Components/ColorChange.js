import React, { Component } from 'react';

class ColorChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: 'red',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 2000); // Simulating a state change after 2 seconds
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.favoriteColor !== this.state.favoriteColor) {
      console.log(`My favorite color is ${this.state.favoriteColor}`);
    }
  }

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
      </div>
    );
  }
}

export default ColorChange;







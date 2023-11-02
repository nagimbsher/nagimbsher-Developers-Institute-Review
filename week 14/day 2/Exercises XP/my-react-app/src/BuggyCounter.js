import React, { Component } from 'react';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleClick = () => {
    const { counter } = this.state;
    if (counter === 5) {
      throw new Error('I crashed!');
    }
    this.setState({ counter: counter + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Counter: {this.state.counter}</button>
      </div>
    );
  }
}

export default BuggyCounter;

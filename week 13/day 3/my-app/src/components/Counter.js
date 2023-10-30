import React from 'react'
class Counter extends React.Component {
  constructor() {
    super();
    this.state ={
      count: 0,
    };
  }
  increment = () =>{
    this.setState({ count: this.state.count + 1});
  };
  decrement = () =>{
    this.setState({ count: this.state.count + 1});

  };
  render(){
    console.log("re rendered");
    return(
      <div>
        <h1>Counter App </h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>increment
        </button>
        <button onClick={this.decrement}>Dncrement
        </button>
      </div>
    );
  }
}
export default Counter;
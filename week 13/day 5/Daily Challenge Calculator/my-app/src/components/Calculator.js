
import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      num1: 0,
      num2: 0,
      result: 0,
      operation: 'addition', 
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: parseFloat(value) });
  };

  handleOperationChange = (e) => {
    this.setState({ operation: e.target.value });
  };

  calculate = () => {
    const { num1, num2, operation } = this.state;
    let result = 0;

    if (operation === 'addition') {
      result = num1 + num2;
    } else if (operation === 'subtraction') {
      result = num1 - num2;
    } else if (operation === 'multiplication') {
      result = num1 * num2;
    } else if (operation === 'division') {
      result = num1 / num2;
    }

    this.setState({ result });
  };

  render() {
    return (
      <div>
        <input
          type="number"
          name="num1"
          value={this.state.num1}
          onChange={this.handleInputChange}
        />
        <select onChange={this.handleOperationChange}>
          <option value="addition">Addition</option>
          <option value="subtraction">Subtraction</option>
          <option value="multiplication">Multiplication</option>
          <option value="division">Division</option>
        </select>
        <input
          type="number"
          name="num2"
          value={this.state.num2}
          onChange={this.handleInputChange}
        />
        <button onClick={this.calculate}>Calculate</button>
        <p>Result: {this.state.result}</p>
      </div>
    );
  }
}

export default Calculator;
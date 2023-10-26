import React from "react";

class Actor extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "Daniel",
      lastName: "Robin",
      image: "image...",
    };
  }

  handleInput = (e) => {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <form>
          First Name:
          <input onInput={this.handleInput} name="firstName" />
          Last Name: <input onInput={this.handleInput} name="lastName" />
          Image: <input onInput={this.handleInput} name="image" />
        </form>

        <h1>Hello from actor</h1>
        <h2>{this.state.firstName}</h2>
        <h2>{this.state.lastName}</h2>
        <h2>{this.state.image}</h2>
      </div>
    );
  }
}

export default Actor;

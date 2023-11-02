import React, { Component } from 'react';
import "./FormContainer.css"
class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: 'male',
      destination: 'Japan',
      lactoseFree: false,
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: newValue });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, age, gender, destination, lactoseFree } = this.state;

    const url = `/?firstName=${firstName}&lastName=${lastName}&age=${age}&gender=${gender}&destination=${destination}&lactoseFree=${lactoseFree ? 'on' : 'off'}`;
    window.location.href = url;
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="age"
            value={this.state.age}
            placeholder="Age"
            onChange={this.handleChange}
          />
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === 'male'}
              onChange={this.handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === 'female'}
              onChange={this.handleChange}
            />
            Female
          </label>
          <br />
          <select name="destination" value={this.state.destination} onChange={this.handleChange}>
            <option value="Japan">Japan</option>
            <option value="South Korea">South Korea</option>
            <option value="Canada">Canada</option>
          </select>
          <br />
          <label>
            <input
              type="checkbox"
              name="lactoseFree"
              checked={this.state.lactoseFree}
              onChange={this.handleChange}
            />
            Lactose Free
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormContainer;

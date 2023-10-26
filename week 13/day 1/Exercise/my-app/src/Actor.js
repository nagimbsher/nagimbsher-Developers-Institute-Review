import React, { Component } from 'react';

class Actor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "John",
      lastName: "Doe",
      image: "https://cdn.britannica.com/66/103066-050-B89D5EAF/Will-Smith-actor-musician-2006.jpg"
    };
  }

  render() {
    return (
      <div>
        <h2>Actor Information</h2>
        <p>First Name: {this.state.firstName}</p>
        <p>Last Name: {this.state.lastName}</p>
        <img src={this.state.image} alt="Actor" />
      </div>
    );
  }
}

export default Actor;




// import React from 'react';

// function Actor({ firstName, lastName, image }) {
//   return (
//     <div className="actor-card">
//       <img src={image} alt={`${firstName} ${lastName}`} />
//       <h2>{`${firstName} ${lastName}`}</h2>
//     </div>
//   );
// }

// export default Actor;

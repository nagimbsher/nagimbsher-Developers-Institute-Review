import React from "react";
class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }))
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <div>
        {this.state.users.map((user) => {
          return (
            <div>
              <h2>{user.name}</h2>
              <h2>{user.email}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Users;

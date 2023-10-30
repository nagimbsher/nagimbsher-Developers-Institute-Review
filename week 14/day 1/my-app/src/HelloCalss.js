import React, { Component } from 'react'

class HelloCalss extends React.Component {
constructor (){
  super();
  this.state ={
    password:"787878",
    username:"johnjhon",
  };
}
handleClick = (val) =>{
  console.log("name=>>>>",val);
};
handleChande =(e) =>{
  this.setState({username:e.target.value})

};

  render() {
    const {name, email} = this.props;
    return (
      <>
      <h1>
        Hello Calss, {name},{email}
        </h1>
        <button onClick={() =>this.handleClick(name)}>Submit</button>
      <div>
        username:{this.state.username} <bar/>
        password:{this.state.password}
      </div>
      <div>
        username:<input onChange={this.handleClick}/> <br/>
        password:<input/>
      </div>
      </>
    )
  }
}
export default HelloCalss
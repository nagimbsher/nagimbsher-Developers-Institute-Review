import React from "react";

export class UserForm extends React.Component {
  constructor(props){
    super(props);
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const messageInput = document.getElementById("search")
    const message = messageInput.value
    const options = {
        method: "POST",
        Headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({message})
    };
    const url = "http://localhost:3001/api/world";
    try{
    const responsJson = await fetch (url, options);
    const res = await responsJson.json();
    this.props.setMessage(res.message);
    messageInput.value = " ";
  }catch(err){
    console.error(err);
   }
  };
  render =()=>{
  return(
  <form onSubmit={this.handleSubmit}>
    <input type="text" placeholder="Something her" id="search"/>
    <input type="submit" value= "Submit" />
  </form>

   );
  }
}
import React, { Component } from 'react'
import "./App.css";
import heroes from "./data/heroes.json";
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {heroes:heroes.superheroes};
  }
  handleClick = () =>{
    this.setState({heroes: this.state.heroes.sort((a,b) =>(Math.random() > 0.5?-1: 1)) });
  };
  render() {
    return (
      <div className='container'>
        <nav className='navbar'>
<h1>Superheroes React Memory Game</h1>
<div> Score:0</div>
<div>TOP Scour:0</div>
        </nav>
        <div className='rules'>
          Get points by clicking on an image but do not click the same one twice
        </div>
        <div className="heroes-container"> 
        {this.state.heroes.map((hero, i) =>(
        <div key={i} className="hero-card" onClick={this.handleClick}>
           <div className='image-container'>
            <img src = {hero.image} />
           </div>
           <p>
            <span className="bold">Name:</span>{hero.name}
           </p>
           <p>
            <span className="bold">Occupation</span>{hero.occupation}
           </p>
            </div>
            ))}
        </div>
      </div>
    );
  }
}

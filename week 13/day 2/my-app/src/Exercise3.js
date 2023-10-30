import React, { Component } from 'react';
import './Exercise.css'; 
class Exercise extends Component {
  render() {
    return (
      <div>
        <p className="para">This is a paragraph</p>

        <h1 style={{ color: 'red', backgroundColor: 'lightblue' }}>This is a heading</h1>
        <p>This is a paragraph</p>
        <a href="https://github.com/nagimbsher/nagimbsher">This is a link</a>
        <form>
          <input type="text" placeholder="This is a form" />
          <button>Submit</button>
        </form>
        <img src="https://picsum.photos/seed/picsum/200/300" alt="This is an image" />
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </div>
    );
  }
}


  

export default Exercise;

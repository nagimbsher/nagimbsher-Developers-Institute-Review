// Exercises XP
// Last Updated: September 22nd, 2023

// What We Will Learn
// Create a React App
// JSX
// Styling in React


// NOTE: You will use the same React App for all the Exercises XP
// Create a React App and start your app

// Exercise 1: With JSX
// Instructions
// In the App.js file, display a “Hello World!” message in a paragraph.
// Create a constant variable with JSX const myelement = <h1>I Love JSX!</h1>;, and render it on the page.
// Create a constant variable named sum, which value is 5 + 5. Render on the page, the following sentence "React is <sum> times better with JSX"




// import React from 'react';
// import './App.css';  

// const user = {
//   firstName: 'Bob',
//   lastName: 'Dylan',
//   favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey'],
// };

// function App() {
//   return (
//     <div className="App">
//       <h3>{user.firstName}</h3>
//       <h3>{user.lastName}</h3>
//     </div>
//   );
// }

// export default App;




// import React from 'react';

// const myelement = <h1>I Love JSX!</h1>;
// const sum = 5 + 5;

// function App() {
//   return (
//     <div className="App">
//       {myelement}
//       <p>Hello World!</p>
//       <p>React is {sum} times better with JSX</p>
//     </div>
//   );
// }

// export default App;



// import React from 'react';

// const myelement = <h1>I Love JSX!</h1>;

// function App() {
//   return (
//     <div className="App">
//       {myelement}
//       <p>Hello World!</p>
//     </div>
//   );
// }

// export default App;



// import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <p>Hello World!</p>
//     </div>
//   );
// }

// export default App;









// Exercise 2 : Object
// Instructions
// Using the following object:

// const user = {
//   firstName: 'Bob',
//   lastName: 'Dylan',
//   favAnimals : ['Horse','Turtle','Elephant','Monkey']
// };
// In the App.js file, render the first name and the last name of the user in two <h3>.
// In a separate Javascript file named UserFavoriteAnimals.js, create a new Class Component called UserFavoriteAnimals. Use props to pass the favAnimals array to the UserFavoriteAnimals component.
// In the UserFavoriteAnimals component, use the map method to create <li> tags in a <ul> tag.
// Each <li> corresponds to one animal from the favAnimals array.
// Display the <li> tags. Tip : You can use the second parameter of the map function as a key to uniquely identify each HTML item





// import React from 'react';
// import './App.css';
// import UserFavoriteAnimals from './UserFavoriteAnimals'; 

// const user = {
//   firstName: 'Bob',
//   lastName: 'Dylan',
//   favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey'],
// };

// function App() {
//   return (
//     <div className="App">
//       <h3>{user.firstName}</h3>
//       <h3>{user.lastName}</h3>
//       <UserFavoriteAnimals favAnimals={user.favAnimals} />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Exercise from './Exercise3';

function App() {
  return (
    <div className="App">
      <Exercise /> {/* Display the Exercise component */}
    </div>
  );
}

export default App;










// import React from 'react';
// import Calculator from './components/Calculator';

// function App() {
//   return (
//     <div className="App">
//       <Calculator />
//     </div>
//   );
// }

// export default App;





// import "./App.css";
// import { useState, useEffect } from "react";
// import User from "./components/User";
// import myUsers from "./users.json";


// const App = () => {
//   const [data, setData] = useState([]);
//   const [input, setInput] = useState();

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((data) => data.json())
//       .then((res) => {
//         setData(res);
//       });
//   }, [])

  

//   return <div className="App">
//     {/* <button onClick={() => {
//       setData(data)
//     }}>Click</button> */}
//     <input type="text" onClick={(e) => {
//       setInput(console.log(e.target.value))
//     }}/>
//     {
//       data.map((i, idx) => {
//         return (
//           <User info={i} key={idx} />
//         )
//       })
//     }
//   </div>;
// }

// export default App;

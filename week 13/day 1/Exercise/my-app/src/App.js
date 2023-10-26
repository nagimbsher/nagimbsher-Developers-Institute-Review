import React from 'react';
import Actor from './Actor';

function App() {
  return (
    <div>
      <h1>My Movie App</h1>
      <Actor />
    </div>
  );
}

export default App;




// import React from 'react';
// import Actor from './Actor';
// import './Actor.css'
// function App() {
//   const actors = [
//     {
//       firstName: 'will',
//       lastName: 'smith',
//       image: 'src="/sites/default/files/styles/portrait_medium/public/2021-10/will-smith-c-hfpa-2016.jpg?format',
//     },
//     {
//       firstName: 'Jane',
//       lastName: 'Smith',
//       image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//     },
//     {
//       firstName: 'Bob',
//       lastName: 'Johnson',
//       image: 'https://st.depositphotos.com/1770836/1372/i/450/depositphotos_13720689-stock-photo-young-businesswoman.jpg',
//     },
//   ];

//   return (
//     <div className="App">
//       <h1>List of Actors</h1>
//       <div className="actors-list">
//         {actors.map((actor, index) => (
//           <Actor
//             key={index}
//             firstName={actor.firstName}
//             lastName={actor.lastName}
//             image={actor.image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;



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

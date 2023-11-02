import Sunrise from './Sunrise';

const App = () => {

  return (
    <div className="box">
      <h1>In the App.js</h1>
      <Sunrise />
    </div>
  )
}

export default App;




// import React from 'react';
// import Counter from './components/Counter';

// function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }

// export default App;


// import React, { Component } from 'react';

// class Actor extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstName: '',
//       lastName: '',
//       image: '',
//     };
//   }

//   handleInputChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value,
//     });
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     // You can access the updated state here and perform any further actions.
//     console.log('Submitted Data:', this.state);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Actor Form</h1>
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <label htmlFor="firstName">First Name:</label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={this.state.firstName}
//               onChange={this.handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="lastName">Last Name:</label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               value={this.state.lastName}
//               onChange={this.handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="image">Image URL:</label>
//             <input
//               type="text"
//               id="image"
//               name="image"
//               value={this.state.image}
//               onChange={this.handleInputChange}
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Actor;



// import Car from "./components/Car";
// import Actor from "./components/Actor";
// const App = () => {
//   const brand = "Ford";

//   return (
//     <div className="box">
//       <h1>In the App.js</h1>
//       <Car />
//     </div>
//   );
// };

// export default App;






// import React from 'react';
// import ReactDOM from 'react-dom';
// import Car from './components/Car';

// ReactDOM.render(
//   <Car />,
//   document.getElementById('root')
// );

// export default Car

// import React from 'react';

// class Car extends React.Component {
//     render() {
     
//         return <h2>Hi, I am a Car!</h2>;
        
//     }
// }

// export default Car;



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

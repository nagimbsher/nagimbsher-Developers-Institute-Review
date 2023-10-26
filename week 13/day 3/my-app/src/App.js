import Car from "./components/Car";
import Actor from "./components/Actor";
const App = () => {
  const brand = "Ford";

  return (
    <div className="box">
      <h1>In the App.js</h1>
      <Car />
    </div>
  );
};

export default App;






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

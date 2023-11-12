import './App.css';
import Action from "./components/Action"
import Display from './components/Display'
import AddOne from './components/AddOne' 
import ShowCounter from './components/ShowCounter' 

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [num1, setNum1] = useState('');

  return (
    <div className="App">
      <AddOne setCount={setCount} />
      <ShowCounter count={count} />
      <Action />
      <Display count={count} />
    </div>
  );
}

export default App;















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

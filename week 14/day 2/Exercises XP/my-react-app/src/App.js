import React from 'react';
import ColorChange from './Components/ColorChange';
import ColorChangeComponent from './ColorChangeComponent';

function App() {
  return (
    <div>
      <ColorChangeComponent/>
      <ColorChange/>
    </div>
  );
}

export default App;














// import React from 'react';
// import BuggyCounter from './BuggyCounter';
// import ErrorBoundary from './ErrorBoundary';

// function App() {
//   return (
//     <div>
//       <h1>Simulation 1:</h1>
//       <ErrorBoundary>
//         <BuggyCounter />
//         <BuggyCounter />
//       </ErrorBoundary>

//       <h1>Simulation 2:</h1>
//       <ErrorBoundary>
//         <BuggyCounter />
//       </ErrorBoundary>
//       <ErrorBoundary>
//         <BuggyCounter />
//       </ErrorBoundary>

//       <h1>Simulation 3:</h1>
//       <BuggyCounter />
//     </div>
//   );
// }

// export default App;



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

import React from 'react';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;





// import React, { Component } from 'react';
// import './App.css';
// import ResultComponent from './components/ResultComponent';
// import KeyPadComponent from './components/KeyPadComponent';

// class App extends Component {
//   state = {
//     result: ""
//   }

//   onClick = button => {
//     if(button === "=") {
//       this.calculate();
//     }

//     else if(button === "C") {
//       this.reset();
//     }

//     else if(button === "CE") {
//       this.backspace();
//     }

//     else {
//       this.setState({
//         result: this.state.result + button
//       })
//     }
//   };

//   calculate = () => {
//     var checkResult = ''
//     if(this.state.result.includes('--')) {
//       checkResult = this.state.result.replace('--', '+')
//     } else {
//       checkResult = this.state.result;
//     }

//     try {
//       this.setState({
//         result: (eval(checkResult) || "") + ""
//       })
//     } catch(e) {
//       this.setState({
//         result: "error"
//       })
//     }
//   };

//   reset = () => {
//     this.setState({
//       result: ""
//     })
//   };

//   backspace = () => {
//     this.setState({
//         result: this.state.result.slice(0, -1)
//     })
//   };

//   render() {
//     return (
//       <div>
//         <div className="calculator-body">
//           <h1>Simple Calculator</h1>
//           <ResultComponent result={this.state.result} />
//           <KeyPadComponent onClick={this.onClick} />
//         </div>
//       </div>
//     )
//   }
// }

// export default App;



// import React from "react";
// import QuoteAndAuthor from "./RandomQuote";
// import quotes from './QuotesDatabase'
// import "./App.css";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       quote: quotes[0].quote,
//       author: quotes[0].author,
//     };
//   }
//   randomQuote() {
//     const randomNumber = Math.floor(Math.random() * quotes.length);
//     return quotes[randomNumber];
    
//   }
//   shuffleQuotes(array){
//     return array.sort(()=>Math.random()-0.5)
//   }

//   handleClick = () => {
//     const generateRandomQuote = this.randomQuote();
//     this.setState({
//       quote: generateRandomQuote.quote,
//       author: generateRandomQuote.author
//     });
//     this.shuffleQuotes(quotes)
//   };

//   randomColor() {
//     const color = `rgb(
//       ${Math.floor(Math.random() * 155)},
//       ${Math.floor(Math.random() * 155)},
//       ${Math.floor(Math.random() * 155)})`;
//     return color;
//   }
  
//   render() {
//     return (
//       <div>
//         <QuoteAndAuthor
//           displayColor={this.randomColor}
//           handleClick={this.handleClick}
//           {...this.state}
//         />
//       </div>
//     );
//   }
// }

// export default App;
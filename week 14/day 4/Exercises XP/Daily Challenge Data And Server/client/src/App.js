import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    message: '',
    inputValue: '',
  };

  async componentDidMount() {
    try {
      const response = await fetch('/api/hello');
      if (response.ok) {
        const message = await response.text();
        this.setState({ message });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Type something..."
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.message}</p>
      </div>
    );
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: this.state.inputValue }),
      });
      if (response.ok) {
        const message = await response.text();
        this.setState({ message, inputValue: '' });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
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

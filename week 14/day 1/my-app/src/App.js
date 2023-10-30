import Hello from './Hello';
import HelloCalss from './HelloCalss';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello name="John" email="john@gmail.comd"/>
        <HelloCalss name="Marry" email="john@gmail.com"/>
      </header>
    </div>
  );
}

export default App;

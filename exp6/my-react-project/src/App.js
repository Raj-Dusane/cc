import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <header className="App-header">
        <h3>Experiment no: 6</h3>
        <h4> Hitesh | 42164</h4>

        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={() => {setCount(count+1)}}> count is {count}</button>
        <p> Edit <code>src/App.js</code> and save to reload. </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
      </header>
    </div>
  );
}

export default App;

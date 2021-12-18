import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react';

function App() {
  let [test, setTest] = useState('')

  useEffect(() => {
    axios
      .get("/api/todos/")
      .then((res) => setTest(res.data))
      .catch((err) => console.log(err));
  }, [])
  

  console.log(test)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

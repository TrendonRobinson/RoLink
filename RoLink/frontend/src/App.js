import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let [test, setTest] = useState('')

  useEffect(() => {
    axios
      .get("/api/users")
      .then((res) => setTest(res.data))
      .catch((err) => console.log(err));
  }, [])
  

  console.log(test)

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div className='Icon-Div'>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="Buttons">
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
          </div>
        </nav>

        <div className='Logo-Div'>
          
        </div>
      </header>
    </div>
  );
}

export default App;

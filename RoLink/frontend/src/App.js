import icon from './images/icon.png';
import logo from './images/LOGO.png'

import './App.css';

import axios from "axios";

import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
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
    <div className='App'>
        <div className="App-header">
        <nav>
          <div className='Icon-Div'>
            <img src={icon} className="App-icon" alt="icon" />
          </div>
          <div className="Buttons">
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
          </div>
        </nav>
        <div className='Logo-Div'>
          <img src={logo} className="App-icon" alt="logo" />
          <Link to='/register'>Get Started</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
// login


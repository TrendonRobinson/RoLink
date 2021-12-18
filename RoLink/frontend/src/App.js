import icon from './images/icon.png';
import logo from './images/LOGO.png'

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


import Login from './pages/Login';
import Register from './pages/Register';

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
      </header>
      <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
    </div>
  );
}

export default App;

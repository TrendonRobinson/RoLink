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

// Pages
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  let [users, setUsers] = useState('')

  function fetch() {
    axios
      .get("/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetch()
  }, [])
  

  console.log(users)

  return (
    <div className='App'>

      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="login" element={<Login userState={[users, fetch]} fetch={fetch} />} />
        <Route path="register" element={<Register />} />
      </Routes>

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


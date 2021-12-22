// Icons
import icon from '../images/icon.png';
import logo from '../images/LOGO.png'

// Styling
import './home.css';

import axios from "axios";

// React
import { useState, useEffect } from 'react';
import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

// Components
import LeftBar from '../components/leftbar'
import RightBar from '../components/rightbar'
import Feed from '../components/feed'

import AppBar from '../materialUI/AppBar'


function App() {

  // States
  let [test, setTest] = useState('')


  useEffect(() => {
    localStorage.setItem('user', null)
  }, [])

  localStorage.setItem('user', null)
  

  return (
    <div className="Home">
      <AppBar />
      <div className="homeContainer"> 
        <LeftBar/>
        <Feed/>
        <RightBar/>
      </div>
    </div>
  );
}

export default App;

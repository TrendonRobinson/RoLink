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
  let [sideBar, setSideBar] = useState(false);

  // useEffect
  useEffect(() => {
		console.log(document);
  }, [])

	function openModal(e) {
		document.getElementById('LeftBar').classList.add('open');
		setSideBar(true);
	}
	function hideModal(e) {
		document.getElementById('LeftBar').classList.remove('open');
		setSideBar(false);
	}


	// Functions
  function handleOpen(open, e) {
		console.log(open)
		if (open) {
			hideModal(e)
		} else {
			openModal(e)
		}
	}
  

  return (
    <div className="Home">
      <AppBar sideBar={[sideBar, handleOpen, setSideBar]} />
      <div className="homeContainer"> 
        <LeftBar sideBar={[sideBar]} />
        <Feed/>
        <RightBar/>
      </div>
    </div>
  );
}

export default App;

import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import './panelButton.css'



import NewspaperIcon from '@mui/icons-material/Newspaper';
import AccountBoxIcon from '@mui/icons-material/AccountBox';



export default function PanelButton(props) {

    let navigate = useNavigate();
    
    // States

    // Functions


    return (
        <div className="panelButton">
            <NewspaperIcon/>
            <p>News feed</p>
        </div>
    );
}

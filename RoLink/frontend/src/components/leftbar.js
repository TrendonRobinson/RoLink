import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


import PanelButton from './panelButton'


import './leftbar.css'


export default function LeftBar(props) {

    let navigate = useNavigate();
    
    // States

    // Functions


    return (
        <div id="LeftBar" className="LeftBar">
            <ul>
                <PanelButton/>
            </ul>
        </div>
    );
}

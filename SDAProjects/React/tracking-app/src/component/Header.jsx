import React from "react";
//Media Assets
import trackinglogo from '../assets/images/trackinglogo.png';

export default function Header() {
    // Data
    return (<header className={`Header`}>
        <h1 > Welcome to the DHL Tracking App </h1>
         <img className = "center" src={trackinglogo} title = "DHL Logo" alt="A tracking logo" /> 
        </header>
    );
}


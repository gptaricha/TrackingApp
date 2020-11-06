import React, { useState } from "react";
import { Link } from "react-router-dom";
//Media Assets
import logo from '../assets/images/background2.gif';
import logo1 from '../assets/images/logo1.png';


// hasLightTheme is boolean that will toogle the logo and css class
export default function Header() {
    // Data
    return (<header className={`Header`}>
        <h1>  Welcome to the DHL Tracking App </h1>
         <img className = "center" src={logo1} title = "DHL Logo" alt="A red DHL text on a yellow background" /> 
        </header>
    );
}


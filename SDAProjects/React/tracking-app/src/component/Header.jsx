import React, { useState } from "react";
import { Link } from "react-router-dom";
//Media Assets
import logoLight from '../assets/images/logo1.png';
import logoDark from '../assets/images/logo1.png';

// hasLightTheme is boolean that will toogle the logo and css class
export default function Header({ hasLightTheme = false }) {
    // Data
    const color = hasLightTheme ? "light" : "dark";
    const logo = hasLightTheme ? logoLight : logoDark;

    //Reactive data
    const [query, setQuery] = useState("");

    
    //Render
    return (<header className={`header ${color}`}>
       <img src={logo} title = "DHL Logo" alt="A red DHL text on a yellow background" />
       {/* <div className="search-bar">
            <input placeholder='Search Parcel' value={query} onChange={event => setQuery(event.target.value)} />
            <a to={'/video/:' + query}>Search</a>
      </div> */}
   
    </header>
    );
}


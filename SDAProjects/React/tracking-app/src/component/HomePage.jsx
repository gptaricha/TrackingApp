// React core
import React, { useState } from "react";

//Components
import Header from './Header';
import FooterDetails from './FooterDetails';
import background1 from '../assets/images/background1.gif';
import trackinglogo from '../assets/images/trackinglogo.png';
import logo1 from '../assets/images/logo1.png';

// Components
import Card from "./Card";
import Forms from './Forms';

export default function HomePage({ parcelinfo }) {
  console.log("parcel info is: ");
  console.log(parcelinfo);

  const [query, setQuery] = useState("");
  
  return (
    <div className="HomePage">
      <Header />
      <section className="container">
      <img src={trackinglogo} title = "DHL truck" alt="A yellow DHL truck moving on the road" />
          < Forms setQuery={setQuery}/>
          <p/>
          <Card searchBy={ query } key={parcelinfo.id} data ={parcelinfo}/>
        
         {/* <div className="grid">{Cards}</div>  */}
        
      </section>
      
      <FooterDetails />
    </div>
    
  );
}

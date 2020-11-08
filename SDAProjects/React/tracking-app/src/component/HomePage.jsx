// React core
import React from "react";

//Components
import Header from './Header';
import Contact from './Contact';
import background1 from '../assets/images/background1.gif';

// Components
import Forms from './Forms';

export default function HomePage({ parcelinfo }) {
  console.log("parcel info is: ");
  console.log(parcelinfo);
  
  return (
    <div className="HomePage">
      <Header />
      <section className="container">
        <img src={background1} title = "DHL truck" alt="A yellow DHL truck moving on the road" />
        < Forms key={parcelinfo.id} parcelinfo ={parcelinfo}/>
        <p/>
      </section>
      <Contact />
    </div>
    
  );
}

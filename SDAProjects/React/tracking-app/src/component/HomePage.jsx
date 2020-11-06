// React core
import React, { useState } from "react";
import Header from './Header';

import parcelTrackInfo from '../parcel.json';

// Components
import Card from "./Card";

export default function HomePage({ parcelinfo }) {
  
  const[searchKeyword, setSearchKeyword] = useState("");
  const handleChangeSearch = (e) => {
      setSearchKeyword(e.target.value);
  }

  const filteredList = (data) => {
    data = data.filter((eachData) =>{
      return eachData.status.toLowerCase().indexOf(searchKeyword) >-1;
    })
    return data.map((trackInfo) => {
      return (
        <li>{trackInfo.staus}</li>
      )
    })
  }
  
  // We render multiple components using map function
  const Cards = parcelinfo.map((info) => {
    return <Card key={info.id} data={info} />;
  });

  
  const [query, setQuery] = useState("");
  return (
    <div className="home-page">
      <Header />
      <section className="recomended">
        <h2>Welcome to DHL tracking App</h2>
        <input classname="search"
            name="searchKeyword"
            placeholder="Parcel ID"
            value={searchKeyword}
            onChange={handleChangeSearch} 
        />
        {filteredList(parcelTrackInfo)}
            {/* <Link to={`Cards`}>Search</Link> */}
         <div className="grid">{Cards}</div> 
        )
      </section>
    </div>
  );
}

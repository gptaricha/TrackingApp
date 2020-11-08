import React, { useState } from 'react';
import Card from './Card';

export default function Forms({ parcelinfo }) {
  const inputTextHandler = (e) => {
    console.log(e.key);
    if(e.key === 'Enter')
      setQuery(e.target.value);
  }
  const [query, setQuery] = useState("");
    return (
        <div className={`Forms`}>
          <form onSubmit={e => { e.preventDefault(); }}>
            <label> <h2>Please enter the Parcel ID:</h2>
              <input className= {`search-bar`} onKeyDown={inputTextHandler} type="text" name="name" placeholder="parcel id"  /> <p/>
              <Card searchBy={ query } key={parcelinfo.id} parcels ={parcelinfo}/>
            </label>
          </form>
        </div>
    );
}
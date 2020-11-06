import React from 'react';

export default function Forms({ setQuery }) {
  const inputTextHandler = (e) => {
    setQuery(e.target.value);
  }
    return (
        <div className={`Header`}>
          <form>
            <label> <h2>Please enter the Parcel ID:</h2>
              <input className= {`search-bar`} onChange={inputTextHandler} type="text" name="name" placeholder="539"  />
            </label>
          </form>
        </div>
    );
}
// import Components
import React, { useEffect, useState } from 'react';
import HomePage from './component/HomePage';
import './css/style.css';

function App() {

  const [status, setStatus] = useState(0);
  const [information, setInformation] = useState([]);
  const endpoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  //This behaves like a constructor like hook
  useEffect(() => {
    // Everything inside here will run at the beginning  
    const getData = async() => {
      try {
        const response = await fetch(endpoint, { mode: "cors" });
        const data = await response.json();
        console.log("inside use effect");
        console.log(data); 
        setInformation(data);
        setStatus(1);
        //If there is data update it

      }
      catch {
        //handle error
        console.log("error");
        setStatus(2);
      }
    }
   getData();
  },[]);

  return (
    <div >
       <div className="home">
         <h1>React fetch {status}</h1>
         { status === 0 ? <p> Loading... </p>: null}
         { status === 1 ? <HomePage parcelinfo={information}/> : null}
         { status === 11 ? <HomePage parcelinfo={[information[8]]}/> : null}
         { status === 2 ? <p>We cannot find data</p> : null }
       </div>
    </div>
  );
}

export default App;

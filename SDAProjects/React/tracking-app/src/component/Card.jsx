import React, { useState } from "react";
import { Link } from "react-router-dom";
//Training wheels 
 <link href="http://sdaproject.se/training-wheels.css" rel="stylesheet" />

export default function Card({ searchBy, data }) {
    console.log('inside card');
    
    let parcel = data.filter(e => e.id === searchBy)[0];

    if(parcel == null)
        return <h3>Searching for your parcel {searchBy}. . .</h3>;

    const {id, status, location_name, eta,last_updated, sender,notes, user_name, user_phone} = parcel;

    return (
        <article className="card"> 
            <p> Your Parcel ID is: <b>{id}</b></p>
            <p> Current Status: <b>{status}</b></p>
            <p> Current Location: <b>{location_name}</b></p>
            <p> Estimated Time of Arrival: <b>{eta}</b></p>
            <p> Last Updated: <b>{last_updated}</b></p>
            <p> Sender: <b>{sender}</b></p>
            <p> Notes: <b>{notes}</b></p>
            <p> user_name: <b>{user_name}</b></p>
            <p> user_phone: <b>{user_phone}</b></p>
            <hr/> 
        </article>        
    );
    
}
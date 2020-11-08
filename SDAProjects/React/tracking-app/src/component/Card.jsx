import React from "react";

export default function Card({ searchBy, parcels }) {
    console.log('inside card');
    if(searchBy === '') {
        return null;
    } else 
        console.log("You have a value");

    let filteredParcel = parcels.filter(e => e.id === searchBy)[0];

    if(filteredParcel == null)
        return <h4>Incorrect parcel id {searchBy}. Please try again</h4>;

    const {id, status, location_name, eta,last_updated, sender,notes, user_name, user_phone} = filteredParcel;

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
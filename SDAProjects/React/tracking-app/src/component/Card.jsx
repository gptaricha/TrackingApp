import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Card({ data }) {
    const {id, status, location_name, eta,last_updated, sender,notes, user_name, user_phone} = data;

    
    return (
        <article className="card"> 
            <p>Your Parcel ID is: {id}</p>
            <p>Current Status: {status}</p>
            <p>Current Location: {location_name}</p>
            <p>Estimated Time of Arrival: {eta}</p>
            <p>Last Updated: {last_updated}</p>
            <p>Sender: {sender}</p>
            <p>Notes: {notes}</p>
            <p>user_name: {user_name}</p>
            <p>user_phone: {user_phone}</p>
            <hr/> 
        </article>
        
    );
}
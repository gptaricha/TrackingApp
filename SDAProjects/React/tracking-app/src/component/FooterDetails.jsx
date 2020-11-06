import React from 'react';
import FB_logo from '../assets/images/FB_logo.jpg';

export default function FooterDetails() {
    return (
    <footer className="contact">
    <h3>Contact information</h3>
    <ul>
        <li> 
            <a href="tel:+46 761465133" >
            Phone: 46 76 146 5133
            </a>
        </li>
         <li> <i className="fas fa-envelope"></i>
            <a href="mailto:softwaredevelopmentacademy@gmail.com" >
            email: SDA Academy
            </a>
        </li>
        <li> <i className="fab fa-facebook"></i> 
            <a href ="http://tiny.cc/6c81tz" >
                DHL Facebook</a>
        </li>
        <li> <i className="fab fa-instagram"></i>
            <a href = "http://tiny.cc/hc81tz"> Instagram
            </a>
        </li>
    </ul>
</footer> 
    )
}
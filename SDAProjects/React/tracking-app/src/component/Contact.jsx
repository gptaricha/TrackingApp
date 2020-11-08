import React from 'react';
import { FaFacebook, FaInstagramSquare, FaPhoneSquareAlt} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
    return (
    <footer className="contact">
    <h3>Contact information </h3>
    <ul>
        <li><FaPhoneSquareAlt />
            <a href="tel:+46 761465133" >
            Phone: 46 76 146 5133
            </a>
        </li>
         <li> <MdEmail />
            <a href="mailto:softwaredevelopmentacademy@gmail.com" >
            email: SDA Academy
            </a>
        </li>
        <li> <FaFacebook/> 
            <a href ="https://www.facebook.com/dhl/" >
                DHL Facebook</a>
        </li>
        <li> <FaInstagramSquare/>
            <a href = "https://www.instagram.com/dhl_global/?hl=enz"> Instagram
            </a>
        </li>
    </ul>
</footer> 
    )
}
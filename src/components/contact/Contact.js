import React from "react";
import { ExternalLink } from "react-external-link";
import fbLogo from '../assets/Facebook_Logo_Primary.png';
import './Contact.css';

export default function Contact () {
    return(
        <div className="container">
            <div>
            <h3>Come check us out!</h3>
            <p>Address: 106 1st St SE Bondurant, IA 50035</p>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.9171099387627!2d-93.4652533250135!3d41.70072507650266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ee93397c8c55b1%3A0x57d877cf48439f05!2sSomewhere%20In%20The%20Middle%20Coffee%20Shop!5e0!3m2!1sen!2sus!4v1718244218598!5m2!1sen!2sus" 
            width="25%" 
            height="25%" 
            style={{border:0}} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title="Google Maps">
            </iframe>
            <p>Phone Number: <a href="tel:5159678884">515.967.8884</a></p>
            <p>Email: <a href="mailto:coffeeshopbondurant@gmail.com">coffeeshopbondurant@gmail.com</a></p>
            </div>
            <div className="logoContainer">
                <ExternalLink href="https://www.facebook.com/somewhereinthemiddlecoffeeshopbondurant/" className="Fb">
                    <img src={fbLogo} className="fbLogo" alt="Facebook Logo"/>
                </ExternalLink>
            </div>
        </div>
    )
}
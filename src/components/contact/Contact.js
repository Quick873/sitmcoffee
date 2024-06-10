import React from "react";
import { ExternalLink } from "react-external-link";
import fbLogo from '../assets/Facebook_Logo_Primary.png';
import './Contact.css';
import yelpLogo from "../assets/yelp_favicon.png";

export default function Contact () {
    return(
        <div className="container">
            <div>
            <h3>Come check us out!</h3>
            <p>Address: 106 1st St SE Bondurant, IA 50035</p>
            <p>Phone Number: 515.967.8884</p>
            <p>Email: coffeeshopbondurant@gmail.com</p>
            </div>
            <div className="logoContainer">
                <ExternalLink href="https://www.facebook.com/somewhereinthemiddlecoffeeshopbondurant/" className="Fb">
                    <img src={fbLogo} className="fbLogo"/>
                </ExternalLink>
                <ExternalLink href="https://www.yelp.com/biz/somewhere-in-the-middle-coffee-shop-bondurant-2" className="Insta">
                    <img src={yelpLogo} className="yelpLogo"/>
                </ExternalLink>
            </div>
        </div>
    )
}
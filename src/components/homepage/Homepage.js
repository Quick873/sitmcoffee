import React from "react";
import './Homepage.css';
import onlineLogo from "../assets/orderOnline.png";
import contactUsLogo from "../assets/contactUsLogo.png";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import menuLogo from "../assets/menuLogo.png";
import coffeeBanner from "../assets/coffeeBanner1.png";

export default function Homepage () {
    return (
        <div>
            <div className="top-container">
                <Link to="/About">
                    <img src={coffeeBanner} alt="coffee" className="coffee" />
                </Link> 
            </div>
            <div className="bottom-container">
            <div className="order">
                    <ExternalLink href="https://somewhereinthemiddle.poppinorder.com/">
                        <img src={onlineLogo} alt="Online Order Logo" className="orderLogo"/> 
                    </ExternalLink>
                </div>
                <div className="menu">
                    <Link to="/Menu">
                        <img src={menuLogo} alt="Menu Logo" className="menuLogo"/> 
                    </Link>
                </div>
                <div className="contact">
                    <Link to="/Contact">
                        <img src={contactUsLogo} alt="Contact Us" className="contactLogo"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
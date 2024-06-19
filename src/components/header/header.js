import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import './Header.css';
import { ExternalLink } from "react-external-link";


export default function Header () {


    return (
        <div className="header">
            <NavLink to={'/'}>
                <img src={logo} className="header-logo" alt="logo"/>
            </NavLink>
            <div className="nav-container">
                <NavLink to={'/about'} className="navlink">About Us</NavLink>
                <NavLink to={'/menu'} className="navlink">Menu</NavLink>
                <ExternalLink href="https://somewhereinthemiddle.poppinorder.com/" className="navlink">Order Online</ExternalLink>
                <NavLink to={'contact'} className="navlink">Contact Us</NavLink>
            </div>
        </div>
    )
}

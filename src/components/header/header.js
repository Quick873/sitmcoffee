import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import './Header.css';


export default function Header () {


    return (
        <div className="header">
            <img src={logo} className="header-logo" alt="logo"/>
            <div className="nav-container">
                <NavLink to={'/about'} className="navlink">About Us</NavLink>
                <NavLink to={'/menu'} className="navlink">Menu</NavLink>
                <NavLink to={'/order'} className="navlink">Order Online</NavLink>
                <NavLink to={'contact'} className="navlink">Contact Us</NavLink>
            </div>
        </div>
    )
}

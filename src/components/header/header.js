import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../../public/logo.jpg'
import './header.css';


export default function Header () {


    return (
        <div className="header">
            <img src={logo} className="header-logo" alt="logo"/>
            <NavLink to={'/about'}>About Us</NavLink>
            <NavLink to={'/menu'}>Menu</NavLink>
            <NavLink to={'/order'}>Order Online</NavLink>
            <NavLink to={'contact'}>Contact Us</NavLink>
        </div>
    )
}

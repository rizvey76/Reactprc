import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css';

const Nav=()=>{
    return (
        <>
        <NavLink activeClassName='nav_class' to="/">About</NavLink>
        <NavLink activeClassName='nav_class' to="/contact">Contact</NavLink>
        <NavLink activeClassName='nav_class' to="/profile">Profile</NavLink>
        </>
    );
}

export default Nav;
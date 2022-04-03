import React from "react";
import { NavLink } from "react-router-dom";

const Navbar=()=>{
    return (
        <>
           <NavLink to="/">home</NavLink>
           <NavLink to="profile">profile</NavLink>
           
        </>
    );
}

export default Navbar;
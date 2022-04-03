import React from "react";
import {NavLink,useLocation} from 'react-router-dom';
const Nav=()=>{
    const loction=useLocation();
    console.log(loction);
    return (
        <>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </>
    );
}

export default Nav;
import React from "react";
import { NavLink } from "react-router-dom";
const Nav=()=>{
    
    return (
        <>
          <a>
              <NavLink to="/">home</NavLink>
              <NavLink to="/user">user</NavLink>
          </a>

         
        </>
    );
}

export default Nav;
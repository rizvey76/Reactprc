import React from "react";
import { NavLink } from "react-router-dom";

const ProNav=()=>{
    return (
        <>
           <NavLink to="us">UserProfile</NavLink>
           <NavLink to="me">EditProfile</NavLink>
        </>
    );
}

export default ProNav;
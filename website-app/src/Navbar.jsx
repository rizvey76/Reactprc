import React from "react";
import { NavLink } from "react-router-dom";
const Navbar=()=>{
    return(
        <>
        <div className="container-fluid nav_bg">
             <div className="row">
               <div className="col-10 mx-auto">


<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav ms-auto">

      <li className="nav-item">
          <NavLink  className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink  className="nav-link" to="/about">About</NavLink>
        </li>


        <li className="nav-item">
          <NavLink  className="nav-link" to="/contact">Contact</NavLink>
        </li>

        <li className="nav-item">
          <NavLink  className="nav-link" to="/service">Service</NavLink>
        </li>

      </ul>
    </div>
  </div>
</nav>



</div>
             </div>
        </div>
        </>
    );
}

export default Navbar;
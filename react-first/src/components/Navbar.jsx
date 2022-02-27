import React  from "react";
import'./Navbar.css';
function Navbar(){
    return(
     <>
     <div className='row sticky-top navbar'>
      <div className="col-md-6 col-lg-1 col-xl-1 logo">
      <p>Logo</p>
      </div>
      <div className="col-md-6 col-lg-1 col-xl-1 products">
      <p>Products</p>
      </div>
      <div className="col-md-6 col-lg-1 col-xl-1 support">
      <p>Support</p>
      </div>
      <div className="col-md-6 col-lg-1 col-xl-1 solutions">
      <p>Solutions</p>
      </div>
      <div className="col-md-6 col-lg-1 col-xl-1 developers">
      <p>Developers</p>
      </div>
      <div className="col-md-6 col-lg-1 col-xl-1  partners">
      <p>Partners</p>
      </div>
      <div className="col-md-6 col-lg-2 col-xl-2 space">
     
      </div>
      <div className="col-md-6 col-lg-1 col-xl-1 signIn">
      <p>SignIn</p>
      </div>
      <div className="col-md-6 col-lg-1 col-xl-1 language">
      <p>Language</p>
      </div>
      <div className="col-md-6 col-lg-2 col-xl-2 h-10 search">
      <p>Search</p>
      </div>
      </div>
     </>
    );
}

export default Navbar;
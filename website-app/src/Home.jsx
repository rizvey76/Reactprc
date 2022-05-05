import React from "react";

const Home=()=>{
    return(
        <>
           <div className="container-fluid nav_bg">
             <div className="row">
               <div className="col-10 mx-auto">
                   <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                         <h1 style={{marginTop:50}}>Grow your business with <strong style={{color:'rgb(4, 183, 238)'}}>us</strong></h1>
                         <h4 className="my-3">we like to work as a team for evey project that are required</h4>
                         <div className="mt-3">
                           <a href="" className="btn btn-outline-primary" style={{borderRadius:40,paddingLeft:40,paddingRight:40,color:'rgb(4, 183, 238)'}}>Get Started</a>
                         </div>
                   </div>

               </div>
             </div>
   </div>    
        </>
    );
}

export default Home;
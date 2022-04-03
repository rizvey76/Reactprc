import React from "react";
import {useNavigate} from "react-router-dom";
const About=()=>{
    const history= useNavigate();
    console.log(history);

    // const goback=()=>{
    //    history("/");
    // }
    return (
        <>
         <h1>This is About Page</h1>
         <button onClick={()=>{
             history("/");
         }}>Go Back</button>
        </>
    );
}

export default About;
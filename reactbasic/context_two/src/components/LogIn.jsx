import React, { useState,useContext } from "react";
import { LoginContext } from "../context/LogInContext";
const LogIn=()=>{
  
    const {setUserName,setShowProfile}=useContext(LoginContext);
    function onInpChange(e){
      setUserName(e.target.value);
      console.log(e.target.value);
    }
    return(<>
    <h1>This is logIn page</h1>
    <input type="text"  placeholder="insert name" onChange={onInpChange}/>
    <br/>
    <button onClick={()=>{
      return  setShowProfile(true);
    }}>LogIn</button>

   
    </>);
}

export default LogIn;
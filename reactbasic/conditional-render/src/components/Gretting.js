import React from "react";
import UserGreetings from "./UserGreetings";
import GuestGreetings from "./GuestGreetings";
const Gretting=(props)=>{
    const isLoggedIn = props.isLoggedIn;
    return(
        <>
           {`${isLoggedIn}` ? <UserGreetings/> : <GuestGreetings/>}
        </>
     
    );
   

}

export default Gretting;
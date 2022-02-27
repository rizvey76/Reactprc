import React,{useState} from "react";

const Thook=()=>{
    let time=new Date().toLocaleTimeString();

    const [pdate,updatedTime]=useState(time);

    const CTime=()=>{
      time=new Date().toLocaleTimeString();
       updatedTime(time);
    }
    setInterval(CTime,1000);
    return(
        <>
        <h1>Digital Clock </h1>
        <hr/>
        <h2>{pdate}</h2>
        </>
    );
}

export default Thook;
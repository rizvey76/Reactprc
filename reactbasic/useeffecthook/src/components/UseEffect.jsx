import React, { useEffect, useState } from "react";

const UseEffect=()=>{
    const [count,setCount]=useState(0);
    const [date,setDate]=useState(new Date());

    const pickTime=()=>{
        setDate(new Date());
    }

   const changeValue=()=>{
      setCount((prevalue)=> prevalue+1);
    }
/////work as component did update////
    useEffect(()=>{
        document.title=`click ${count} numbers`;
    },[count]);



 

    useEffect(()=>{
      const interval=setInterval(pickTime,1000);
      return ()=>{clearInterval(interval)};
    },[]);

return(
    <>
   <h1>{date.toLocaleTimeString()}</h1>
    <button type="button" onClick={changeValue}>Click</button>
    </>
);
}

export default UseEffect;
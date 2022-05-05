import React from "react";
import withCounter from "./withCounter";



const ClickCounter=(props)=>{
  

    const{count,incrementCount}=props;
    return(
        <>
        <button type="button" onClick={incrementCount}> click {count} times</button>
        </>
    );

}

export default withCounter(ClickCounter);
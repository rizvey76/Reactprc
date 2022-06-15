import React, { useEffect, useRef } from "react";

const Form=()=>{
    const inputField=useRef();

    useEffect(()=>{
         inputField.current.focus();
    },[]);

return(
   <>
    <h2>Example Of useRef() Hook</h2>
       <input ref={inputField} type="text" placeholder="input here...."/>
    </>
);
}

export default Form;
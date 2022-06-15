import React, { useContext } from "react";
import { counterContext} from "../App";

const  ComponentB=()=>{
    const getContext=useContext(counterContext);
return(
    <>
      <h2>This is from ComponentB</h2>
      <button type="button" onClick={()=>getContext.contextDiapatch('increment')}>increment</button>
      
      <button type="button" onClick={()=>getContext.contextDiapatch('decrement')}>decrement</button>
    </>
);
}

export default  ComponentB;
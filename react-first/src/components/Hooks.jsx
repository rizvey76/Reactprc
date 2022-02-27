import React,{useState} from "react";

const Hooks=()=>{
    const[count,setCount]=useState(0);
    const IncNum=()=>{
        setCount(count + 1);
    }
return (
    <>
     <h1>React Hook Xample</h1>
     <hr/>
     <h2>Counted Value{count}</h2>
     <button className="btn btn-primary" onClick={IncNum}>Click Me</button>
    </>
);  
}

export default Hooks;
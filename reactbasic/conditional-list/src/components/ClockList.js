import React from "react";
import Clock from "./Clock";

export default function ClockList({quantities=[]}){
return(
    <>
       {quantities.map((key)=>{
          return <Clock key={key}/>
       })}
    </>
);
}


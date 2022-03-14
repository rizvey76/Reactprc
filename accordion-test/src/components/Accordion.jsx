import React,{useState,useEffect} from "react";
import './Accordion.css';
import {QueData}  from './QueData';

const Accordion=()=>{
  const [bolvalue,bolfunction]=useState(false);


  useEffect(()=>{
    const color=getComputedStyle(document.documentElement).getPropertyValue('--color-value');
    // console.log(color);
  },[]);

  const toggle=(index)=>{
    if(index === bolvalue){
      return bolfunction(null);
    }
       bolfunction(index);
     console.log(index);
  }


  function setColor(color){
    document.documentElement.style.setProperty('--color-value',color);
  }

return(
    <>
    <div className="accorBack">
       
          {QueData.map((arr,index)=>{
            return (
              <>
              <div className="header">
              <h1 className="header-txt">{arr.que}</h1>
              <button className="btn" onClick={()=> toggle(index)}>{bolvalue===index?<h4>+</h4>:<h4>-</h4>}</button>
              <button onClick={()=>setColor('orange')}>color</button>
              </div>
              <hr/>
              <div className="txt-body">
              <h3>{arr.ans}</h3> 
              </div>
              </>
              
          )})}
      

     </div>
    </>
);
};

export default Accordion;
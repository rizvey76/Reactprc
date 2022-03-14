import React,{useState} from "react";
import MyAccordion from './MyAccordion';
import './Accordion.css';
import { objJson } from "./objJson";

const Accordion=()=>{
    const [object,objFunc]=useState(objJson);

   return(
       <>
       <section>
          <h1>Accordion Example</h1>
          {object.map((obj)=>{
              const {id}=obj;
              return <MyAccordion key={id} {...obj}/>
          })}
       </section>

       </>
   );
};
export default Accordion;
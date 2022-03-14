import React,{useState} from "react";
const MyAccordion=({question,answer})=>{
  const[show,setShow]=useState(false);

  return(
      <>
       <div>
           <p  onClick={()=>{
               setShow(!show)
           }}>{show?"—":"+"}</p>
           <h3>{question}</h3>
       </div>
       {show && <p>{answer}</p>}
      </>
  );
}

export default MyAccordion;
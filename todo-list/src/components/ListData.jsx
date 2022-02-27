import React from "react";

const ListData=(props)=>{
  

   return(<>
   <li> {props.propData}<button onClick={()=>{
       props.onSelect(props.id);
   }}>Remove</button></li>
   </>);
};

export default ListData;
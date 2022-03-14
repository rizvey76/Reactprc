import React from "react";

const ListEl=(props)=>{

  
return (
    <>
      <li>{props.listData} <button onClick={()=>{
          props.reFunction(props.id);
      }}>Remove</button> </li>
    </>
);
};

export default ListEl;
import React from "react";

const Input=({type,placeholder},ref)=>{
    return(
        <>
        <h2>Example Of forwardRef</h2>
          <input type={type} placeholder={placeholder} ref={ref}  />
        </>
    );
}

const ForwordedInp=React.forwardRef(Input);

export default ForwordedInp;

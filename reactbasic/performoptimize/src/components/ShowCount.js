import React from "react";

const ShowCount=({count,title})=>{
return(
    <>
    <p>{title} is {count}</p>
    </>
);
}

export default React.memo(ShowCount);
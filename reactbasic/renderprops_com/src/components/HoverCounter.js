import React from "react";




const  HoverCounter=({count,incrementCount})=>{

return(
        <>
      <h1 onMouseOver={incrementCount}>Hover {count} times</h1>
        </>
    );


}

export default HoverCounter;
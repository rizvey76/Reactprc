import React from "react";

const BoilingVerdict=({celsius=0})=>{
  
   return(
   <>
   {celsius>=100?(<p>The water would boil</p>):(<p>Water would not boil</p>)}
   </>
   );
}

export default BoilingVerdict;

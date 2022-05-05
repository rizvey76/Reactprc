import React from "react";




const  ClickCounter=({count,incrementCount})=>{

return(
        <>
      <button type="button" onClick={incrementCount}>click {count} times</button>
        </>
    );


}

export default ClickCounter;


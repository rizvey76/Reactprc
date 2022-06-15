import React from "react";
import useCustom from "../custom/useCustom";

const LayoutTwo=()=>{
    const onLargeScreen=useCustom(768);
  return(<>
  <h1>you are browsing on {onLargeScreen?'large':'small'}</h1>
  </>);
}

export default LayoutTwo;
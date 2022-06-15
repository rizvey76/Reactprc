import React from "react";
import useCustom from "../custom/useCustom";

const LayoutOne=()=>{
    const onSmallScreen=useCustom(600);
  return(<>
  <h1>you are browsing on {onSmallScreen?'small':'large'}</h1>
  </>);
}

export default LayoutOne;
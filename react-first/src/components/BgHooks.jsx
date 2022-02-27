import React,{useState} from "react";
import "./BgHooks.css";

const BgHooks=()=>{


let myColor="#EACCFF";

const [bg,setColor]=useState(myColor);


const updateColor=()=>{
    myColor="#5D5166";   
    setColor(myColor);
  };


//////////////////////

const updatetoggle=()=>{
document.getElementById("toggle").classList.toggle("hooks");
};
return (
    <>
    <hr/>
    <div style={{backgroundColor: bg}}>
    <button onClick={updateColor}>Change Color</button>
    </div>

    <hr/>
    <div className="hooks" id="toggle">
    <button onClick={updatetoggle}>Change Color</button>
    </div>
    
    </>
);

};

export default BgHooks;
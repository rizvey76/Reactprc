import React from "react";
// import './TemplateLiteral.css';
const oneTxt="Intel";
const twoTxt="Processor";

const fontS={
textAlign: "center",
margin: '40%',
padding: '0',
position: "absolute",
color: "aliceblue",
}

function TemplateLiteral(){
    return(
        <>
        <h1  className="temp"  style={fontS}>{`${oneTxt} ${twoTxt}`}</h1>
        </>
    );
}

export default TemplateLiteral; 
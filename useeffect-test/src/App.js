import './App.css';
import React,{useState,useEffect} from "react";

function App() {
  const [num,setNum]=useState(0);
  useEffect(()=>{
    alert("increment!");
    document.title=`useEffect ${num}`;
  },[num]);
  return (
    <>
    <button onClick={()=>{
      setNum(num+1);
    }}>Click Me {num}</button>
    </>
  );
}

export default App;

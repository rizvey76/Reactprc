
import './App.css';
import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function App() {

  const [intval,actionfunc]=useState(0);

  const incremeent=()=>{
   actionfunc(intval+1);
  };

  const decremeent=()=>{
    if(intval>0){
      actionfunc(intval-1);
    }else{
      alert("Out of range");
    }
  };


  return (
<>
  <div className="box">
    <div  className="headerr">
    <h1>Increment/Decrement</h1>
    </div>
    <br/>
    <h2 className="number">{intval}</h2>
    <div className="btn">
     <button className="btn-incre" onClick={incremeent}><AddIcon/></button>
     <button className="btn-decre" onClick={decremeent}><RemoveIcon/></button>
    </div>
  </div>
</>
  );
}

export default App;

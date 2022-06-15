import Form from './components/Form';
import './App.css';
import ForwordedInp from './components/Input';
import { useEffect, useRef } from 'react';
import Time from './components/Time';
function App() {
  const fInput=useRef();
  useEffect(()=>{
      fInput.current.focus();
  },[]);

  return (
    <>
     <Form/>
     <hr/>
     <ForwordedInp ref={fInput} type={"text"} placeholder={"Hello Dare"}/>
     <hr/>
     <Time/>
    </>
  );
}

export default App;

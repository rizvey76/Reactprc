import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import ShowCount from './components/ShowCount';
import Title from './components/Title';
import { useCallback, useMemo, useState } from 'react';

function App() {
  const[count1,setCount1]=useState(0);
  const[count2,setCount2]=useState(0);

  const incrementByOne=useCallback(
    ()=>{
      setCount1((preCount)=>preCount+1);
    },[]
  );

  const incrementByFive=useCallback(
    ()=>{
      setCount2((preCount)=>preCount+5);
    },[]
  );


  const isEvenOrOdd=useMemo(
    ()=>{
      let i=0;
      while(i<1000){
         i=i+1;
      };
      return count1%2===0;
    },[count1]
  );

  return (
   <>
   <Title/>
   <ShowCount count={count1} title="Counter1"/>
   <span>{isEvenOrOdd?"Even" : "Odd"}</span>
   <Button handleClick={incrementByOne}>IncrementByOne</Button>
   <hr/>
   <ShowCount count={count2} title="Counter2"/>
   <span>{isEvenOrOdd?"Even" : "Odd"}</span>
   <Button handleClick={incrementByFive}>IncrementByFive</Button>
   </>
  );
}

export default App;

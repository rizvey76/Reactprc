
import React, { useReducer } from 'react';
import './App.css';
import ComponentA from './componets/ComponentA';

export const counterContext=React.createContext();
const initialState=0;
const reducer=(state,action)=>{
   switch(action){
     case 'increment':
       return state+1;
     case 'decrement':
       return state-1;
     default:
       return state;    
   }
}

function App() {
  const[count,dispatch]=useReducer(reducer,initialState);
  return (
    <>
    <div>{count}</div>
    <counterContext.Provider value={{contextDiapatch:dispatch}}>
    <ComponentA/>
    </counterContext.Provider>
       
    </>
  );
}

export default App;

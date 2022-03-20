import { createContext } from 'react';
import './App.css';
import ComA from './ComA';

const FirstName=createContext();
const LastName=createContext();

function App() {
  return (
   <>
     <h1>This is App Component</h1>
     <FirstName.Provider value={"Yahoo"}>
     <LastName.Provider value={"Baba"}>
     <ComA/>
     </LastName.Provider>
     </FirstName.Provider>
     <hr/>
   </>
  );
}


export default App;
export { FirstName,LastName };

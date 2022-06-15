import logo from './logo.svg';
import './App.css';
import LogIn from './components/LogIn';
import {useState} from "react";
import {LoginContext} from "./context/LogInContext";
import Profile from './components/Profile';
function App() {
  const[username,setUserName]=useState("");
  const[showProfile,setShowProfile]=useState(false);
  return (
    <>
<LoginContext.Provider value={{username,setUserName,setShowProfile}}>
  {showProfile ? <Profile/>:<LogIn/> }
</LoginContext.Provider>

    </>
  );
}

export default App;

import './App.css';
import {Route,Routes,Navigate} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Name from './Name';
import Nav from './Nav';
import Post from './Post';
import { useState } from 'react';

import Profile from './Profile';

function App() {
  const[login,setLogin]=useState(false);

  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>

 

      <Route path="/contact/name" element={<Name/>}/>
      <Route path='/post/:id' element={<Post/>}/>
      <Route path='*' element={<Error/>}/>


      <Route  path="/profile" element={login ? <Profile/> : <Navigate replace to="/" />} />

    </Routes>

    <button onClick={()=>{
      return setLogin(!login);
    }}>{login?"LogOut":"LogIn"}</button>
   
   
    </>
  );
}

export default App;

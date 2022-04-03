import {Routes,Route} from  "react-router-dom";
import Home from "./Home";
import User from "./User";
import Nav from "./Nav";
import './App.css';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/user/:id"  element={<User/>}/>
        </Routes> 
    </>
  );
}

export default App;

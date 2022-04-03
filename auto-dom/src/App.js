import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Navbar from './Navbar';
import './App.css';
import UserProfile from "./UserProfile";
import EditProfile from "./EditProfile";
import NoMatch from './NoMatch';

function App() {
 

 
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route  path="profile" element={<Profile/>}>
         <Route index element={<UserProfile />} />
         <Route path="user" element={<UserProfile />} />
         <Route path="edit" element={<EditProfile />} />
         <Route path="*" element={<NoMatch/>} />
      </Route>  
        
    </Routes>

    </>
  );
}

export default App;

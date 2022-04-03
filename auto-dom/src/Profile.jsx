import React from "react";
import {NavLink, Routes,Route,Outlet} from "react-router-dom";
import UserProfile from "./UserProfile";
import EditProfile from "./EditProfile";


const Profile=()=>{
   return (
       <>
       <nav>
           <NavLink to="user">user</NavLink>
           <NavLink to="edit">edit</NavLink>
       </nav>
       <Outlet/>
{/* <Routes>
<Route path="us" element={<UserProfile />} />
<Route path="me" element={<EditProfile />} />
</Routes> */}
       </>

   );
}

export default Profile;
import React from "react";
import { useParams ,useLocation} from "react-router-dom";
const User=()=>{
    const {id}=useParams();
    const location=useLocation();
    console.log(location);
    return <h1>This is User {id}</h1>
}

export default User;
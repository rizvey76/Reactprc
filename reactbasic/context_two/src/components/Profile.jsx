import React,{useContext} from "react";
import { LoginContext } from "../context/LogInContext";
const Profile=()=>{
    const {username}=useContext(LoginContext);
    return(<>
    <h1>this is {username} page</h1>
    </>);
}

export default Profile;
import React from "react";
import { useParams,NavLink } from "react-router-dom";

const User=()=>{
    const { userId } = useParams();
    return (
        <>
          <h2>User: {userId} </h2>
          <NavLink to="/users">Back to Users</NavLink>
        </>
    );
}
export default User;
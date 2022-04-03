import React from "react";
import {Link,Outlet } from "react-router-dom";

const Users=({users})=>{
    return (
        <>
      <ul>
        {users.map((user) => {
            return (
          <li key={user.id}>
            <Link to={user.id}>
              {user.fullName}
            </Link>
          </li>
            )
        }
        )}
      </ul>
      <Outlet/>
        </>
    );
}
export default Users;
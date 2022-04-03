import React from "react";
import { useLocation, useParams } from "react-router-dom";
const Post=()=>{
    const {id} = useParams();
    const query=new URLSearchParams(useLocation().search);
    // console.log(useLocation());
    return (
        <>
        <h1>This is Post {id}</h1>
        <h1>This is Post First Name {query.get("first")}</h1>
        </>
    
    );
}

export default Post;
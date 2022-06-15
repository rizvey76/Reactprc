import React, { useEffect, useState } from "react";

const GetPost1=()=>{
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState("");
    const[post,setPost]=useState({});

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1').then((response) => response.json()).then((data)=>{
            setLoading(false);
            setPost(data);
            setError("");
        }).catch(()=>{
            setLoading(false);
            setPost({});
            setError("There was a problem!");
        })
    },[]);
    return(
        <>
        <h2>useState call</h2>
          {loading ? 'Loading':post.title}
          {error || null}
        </>
    );
}

export default GetPost1;
import React,{useState} from "react";
import SearchResult from "./SearchResult";
const Search=()=>{
    const [imgVal,setVal]=useState("");

const valChange=(event)=>{
        const data=event.target.value;
        console.log(data);
        setVal(data);
    }

    return(
        <>
          <h1>This is search page</h1>
          <hr/>
          <input type="text" value={imgVal} onChange={valChange} placeholder="Type here"/>
          {imgVal===''?null:<SearchResult name={imgVal}/>}
        </>
    );
}

export default Search;


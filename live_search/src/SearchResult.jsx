import React from "react";

const SearchResult=(props)=>{
  const url=`https://source.unsplash.com/400x400/?${props.name}`;
    return(
        <>
          <img src={url} alt="image not found"/>
        </>
    );
}

export default SearchResult;
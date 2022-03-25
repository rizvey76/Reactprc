import React, { useEffect, useState } from "react";
import axios from "axios";
const ComA=()=>{
     const [num,selectNum]=useState();
     const [names,selectNames]=useState();
     const [moves,selectMoves]=useState();

     useEffect(
         ()=>{
            //  alert("helow");

            async function getData(){
                const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
                console.log(res);
                selectNames(res.data.name);
                selectMoves(res.data.moves.length);
            }

            getData();
         }
     );
  return(
      <>
      <select value={num} onChange={
          (event)=>{
             selectNum(event.target.value);
          }
      }>
          <option value="1">1</option>
          <option value="25">25</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
      </select>

      <h1>{num}</h1>
      <h1>{names}</h1>
      <h1>{moves}</h1>
      </>
  );
}

export default ComA;
import React from "react";
import { FirstName,LastName } from "./App";
const ComC=()=>{
   return(
       <>
        <h1>This is from C</h1>
        <hr/>
        <FirstName.Consumer>
         {
             (fval)=>{
                return (
                    <>
                    <LastName.Consumer>
                        {
                            (lval)=>{
                                return <h2>Hello World {fval} {lval}</h2>
                            }
                        }
                    </LastName.Consumer>
                    </>
                );
             }
         }
        </FirstName.Consumer>
       </>
   );
}
export default ComC;
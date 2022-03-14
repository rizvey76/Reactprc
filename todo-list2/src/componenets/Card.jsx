import React,{useState} from "react";
import './Card.css';
import ListEl  from "./ListEl";

const Card=()=>{
    const [txtVal,storVal]=useState("");
    const [txtArr,arrObj]=useState([]);

    const changeTxt=(e)=>{
        storVal(e.target.value);
    };

    const insertData=()=>{
       arrObj((arr)=>{
           return [...arr,txtVal];
       });
       storVal(" ");
    };

const deleteData=(id)=>{
    arrObj((arry)=>{
        return arry.filter((a,index)=>{
           return index !==id;
        });
    });
};


    return (
    <>
    <div>
        <input type="text" onChange={changeTxt} value={txtVal}/>
        <button onClick={insertData}>Add</button>
        <hr/>
        <div>
            <ol>
                <div>
                {txtArr.map((val,index)=>{
                    return <ListEl key={index} id={index} listData={val} reFunction={deleteData}/>;
                })}
                
                </div>

            </ol>
        </div>
    </div>
    </>);
};

export default Card;
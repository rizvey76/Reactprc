import React,{useState} from "react";
import './Card.css';
import ListData from "./ListData";

const Card=()=>{



    const [lstItem,setListItem]=useState("");
    const [itemArray,itemArrayFunc]=useState([]);

    const changeTxt=(e)=>{
       setListItem(e.target.value); 
    }

    const addList=()=>{
      itemArrayFunc((arrObj)=>{
          return [...arrObj,lstItem];
      });

      setListItem("");
    }



    const deleteItem=(id)=>{
        

        itemArrayFunc((arrObj)=>{
           return arrObj.filter((arrData,index)=>{
                 return index !== id;
           });
        });

    };

    return(
        <>
        <div className="todo">
           <div>
             <h3>ToDo List</h3>
           </div>
           <input type="text" onChange={changeTxt} value={lstItem}/>
           <button onClick={addList}>Add</button>
           <br/>
           <hr/>
           <ol>
               
               {itemArray.map(
                   (arr,index)=>{
                     return <ListData key={index} id={index} onSelect={deleteItem} propData={arr}/>
                   }
               )}
               
            

           </ol>
        </div>
        </>
    );

};

export default Card;
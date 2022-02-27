import React,{useState} from "react";

const FormHooks=()=>{

    const [name,setName]=useState("");
    const [acName,setAction]=useState("");
    const [pass,setPass]=useState("");
    const [acPass,setAction2]=useState("");

    const inputAction=(event)=>{
        setName(event.target.value);
    }

    const inputAction2=(event)=>{
        setPass(event.target.value);
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        setAction(name);
        setAction2(pass);
    }
    return (
        <>
        <h1>React Form By Hooks</h1>
        <div>
            <form onSubmit={onSubmit}>
            <h3>Submitted value{acName}" "{acPass}</h3>
            <input type="text" placeholder="Enter Your Name" value={name} onChange={inputAction}/>
            <br/>
            <input type="password" placeholder="Enter Your Passsword" value={pass} onChange={inputAction2}/>
            <button type="submit" >Submit</button>
            </form>
        </div>
        </>
    );

}

export default FormHooks;
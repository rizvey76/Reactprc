import React from "react";

class Form extends React.Component{
    state={
        name:'',
        cars:'',
        checkbox:false,
        checkRadio:false,
        radioValue:'javaScript',
    }

    handleCheck=(e)=>{
        if(e.target.type === "text"){
           this.setState(
               {
                   name:e.target.value,
               }
           );
        }else if(e.target.type === "select-one"){
            this.setState(
                {
                    cars:e.target.value,
                }
            );
        }else if(e.target.type === "checkbox"){
            this.setState(
                {
                    checkbox:e.target.checked,
                }
            );
        }else if(e.target.type === "radio"){
            this.setState(
                {
                    checkRadio:e.target.checked,
                    radioValue:e.target.value,
                }
            );
            
        }
        else {
            console.log('nothing here');
        }
    }

    submitHandaler=(e)=>{
        const {name,cars,checkbox,checkRadio,radioValue}=this.state;
        this.setState({
        name:'',
        cars:'',
        checkbox:false,
        checkRadio:false,
        radioValue:'',
        });
        e.preventDefault();
        console.log(name,cars,checkbox,checkRadio,radioValue);
    }


    render(){
        const {name,cars,checkbox,checkRadio,radioValue}=this.state;
       
        return(
           
            <>
             <form onSubmit={this.submitHandaler}>
           
             <input type="text"  name="name" value={name} onChange={this.handleCheck}/><br/>

             <select name="cars" value={cars} onChange={this.handleCheck}>
             <option value="volvo">Volvo</option>
             <option value="saab">Saab</option>
             <option value="mercedes">Mercedes</option>
             <option value="audi">Audi</option>
            </select>
            <br/>
             <input type="checkbox" name="checkbox" checked={checkbox} onChange={this.handleCheck}/>
             <br/>
             <input type="radio" value={radioValue}  checked={checkRadio}  onChange={this.handleCheck}/>
             <br/>
             <input type="submit" value="Submit"/>
            </form> 
            </>
        );
    }
}

export default Form;
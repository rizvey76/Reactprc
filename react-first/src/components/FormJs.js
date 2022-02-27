import React from 'react';

export default class FormJs extends React.Component{
    state={
        title:"JavaScript",
    }

    handleChange=(event)=>{
       this.setState(
           {
               title: event.target.value,
           }
       );
    }

    render(){
        const{title}=this.state;
        return(
            
            <div>
                <hr/>
                <form>
                    <input type="text" placeholder='Enter Your Name' value={title} onChange={this.handleChange}/>
                </form>
                <h2>{title}</h2>
            </div>
        );
    }
}
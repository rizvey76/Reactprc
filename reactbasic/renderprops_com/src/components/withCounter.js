import React from "react";

const withCounter=(OriginalComponent)=>{
   class NewCounter extends React.Component{
    state={
        count:0,
    }

incrementCount=()=>{
    this.setState((preState)=>({count:preState.count+1}));
}  


render(){
    const {count}=this.state;
    return(
        <>
        <OriginalComponent count={count} incrementCount={this.incrementCount}/>
        </>
    );
}
   }

   return NewCounter;
}

export default withCounter;
import React from "react";
import LogInButton from "./LogInButton";
import LogOutButton from "./LogOutButton";
import Gretting from "./Gretting";

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.handleLogIn=this.handleLogIn.bind(this);
        this.handleLogOut=this.handleLogOut.bind(this);
        this.state={isLoggedIn:false}
    }

    handleLogIn=()=>{
       this.setState({isLoggedIn:true});
     
    }

    handleLogOut=()=>{
        this.setState({isLoggedIn:false});
      
    }

    

    render(){
        const isLoggedIn=this.state.isLoggedIn;
        let button;

        if(isLoggedIn){
           button=<LogOutButton onClick={this.handleLogOut}/>
        }else{
            button=<LogInButton onClick={this.handleLogIn}/>
        }
        return(
        //   <>{`${isLoggedIn}? ${button}=<LogOutButton/> : ${button}=<LogInButton/>`}</>
        <div>
            <Gretting isLoggedIn={isLoggedIn}/>
            {button}
        </div>
        );
    }

}

export default LoginControl;
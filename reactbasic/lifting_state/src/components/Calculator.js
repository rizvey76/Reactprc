import React from "react";
import TemperatureInput from "./TemperatureInput";
import {convert, toCelsius,toFahrenheit} from "../lib/Converter";
import BoilingVerdict from "./BoilingVerdict";

class Calculator extends React.Component{
   state={
       temperature:'',
       scale: 'c',
   }

   handleChange=(e,scale)=>{
      this.setState({
          temperature:e.target.value,
          scale,
      }); 
   }

    render(){
        const{temperature,scale}=this.state;
        const celsius= scale==='f'? convert(temperature,toCelsius):temperature;
        const fahrenheit= scale==='c'? convert(temperature,toFahrenheit):temperature;
        return(
         
            <>
            <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleChange}/>
            <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.handleChange}/>
            <BoilingVerdict celsius={parseFloat(celsius)}/>
            </>
        );
    };
}

export default Calculator;
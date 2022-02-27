import React from "react";
import './Carousel.css';
import'./TemplateLiteral';
import TemplateLiteral from "./TemplateLiteral";

function Carousel(){

    return (
    <>
    <div className="row">
        <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 image'>
        <TemplateLiteral/>
        <img className='image-class' src={require('../images/intel.jpg')} alt="intel"/> 
        </div>
    </div>    
  </>
    );
     
}

export default Carousel;
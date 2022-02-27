import React from "react";
import JsonObj from'../info.json';
import './JsonCard.css';

function JsonCard(){
    let cTitle="";
    let cTxt="";
    let cImage=""; 

   return (
       



  JsonObj.map(
      (obj)=>{
         cTitle=obj.cardTitle;
         cTxt=obj.cardTxt;
         cImage=obj.cardImage;

         return(
             <>
             
          <div className="row">
              <div className="jsonCard">
       <div class="col-4 ">
          <div class="card imgCard">
          <img className="card-img-top " src={require(`../${cImage}`)} alt="Card image" />
    <div className="card-body">
      <h4 className="card-title">{cTitle}</h4>
      <p className="card-text">{cTxt}</p>
      <a href="#" className="btn btn-primary">See Profile</a>
    </div>
          </div>
        </div>
        </div>
        </div>

 {/* <div className="cardx">
  <img  className="imgx" src={require(`../${cImage}`)} alt="Avatar" />
  <div className="containerx">
    <h4><b>{cTitle}</b></h4> 
    <p>{cTxt}</p> 
  </div>
</div> */}
        </>   
         );

      }
  

  )
   );
  
}

export default JsonCard;
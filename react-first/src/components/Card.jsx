import React  from "react";
import './Card.css';
function Card(){
    return(
        <>
 
{/* <div className="row  mainCard">



 <div className="card cardd">
    <img className="card-img-top imgCard" src={require('../images/intel.jpg')} alt="Card image" />
    <div className="card-body">
      <h4 className="card-title">John Doe</h4>
      <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <a href="#" className="btn btn-primary">See Profile</a>
    </div>
  </div>

  <div className="cardsp">

</div>
  
 <div className="card cardd">
    <img className="card-img-top imgCard" src={require('../images/intel.jpg')} alt="Card image" />
    <div className="card-body">
      <h4 className="card-title">John Doe</h4>
      <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <a href="#" className="btn btn-primary">See Profile</a>
    </div>
  </div>

  <div className="cardsp">

</div>

 <div className="card cardd">
    <img className="card-img-top imgCard" src={require('../images/intel.jpg')} alt="Card image" />
    <div className="card-body">
      <h4 className="card-title">John Doe</h4>
      <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <a href="#" className="btn btn-primary">See Profile</a>
    </div>
  </div>



  </div> */}


<div class="row mainCard">
        <div class="col-4">
          <div class="card imgCard">
          <img className="card-img-top " src={require('../images/intel.jpg')} alt="Card image" />
    <div className="card-body">
      <h4 className="card-title">John Doe</h4>
      <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <a href="#" className="btn btn-primary">See Profile</a>
    </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card imgCard">
          <img className="card-img-top " src={require('../images/intel.jpg')} alt="Card image" />
    <div className="card-body">
      <h4 className="card-title">John Doe</h4>
      <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <a href="#" className="btn btn-primary">See Profile</a>
    </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card imgCard">
          <img className="card-img-top" src={require('../images/intel.jpg')} alt="Card image" />
    <div className="card-body">
      <h4 className="card-title">John Doe</h4>
      <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <a href="#" className="btn btn-primary">See Profile</a>
    </div>
          </div>
        </div>
      </div>

        </>
    );
}

export default Card;
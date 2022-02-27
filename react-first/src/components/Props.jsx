import React from 'react';

function MyProps(props){
 return (
     <>
     <div className='row'>
         <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4'>
           <img src={props.imgsrc} alt="props Pic"/>
         </div>
     </div>
     </>
 );
}

export default MyProps;
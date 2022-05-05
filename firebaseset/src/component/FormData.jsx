import React,{useState,useEffect} from "react";

const FormData=()=>{

    
    

    const[user,setUser]=useState({
        fname:"",
        lname:"",
        phone:"",
        address:"",
        terms:true,
    });


    const [formErrors,setFormErrors]=useState({});

    const [isSubmit,setIsSubmit]=useState(false);

    /////
    let isChecked=false;

  

   

    let name,value;
    const getUser=(event)=>{
        
     name=event.target.name;
     value=event.target.value;

     setUser ({...user,[name]:value});
    }


    ///Post///
    const postData=async(e)=>{
       e.preventDefault();

       const{fname,lname,phone,address,terms}=user;

       if(fname && lname && phone && address && terms){
        const response= await fetch('https://fir-form-3ca3a-default-rtdb.firebaseio.com/firebaseForm.json',{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fname,
                lname,
                phone,
                address,
                terms,
            }),
        });
  
        if(response){
           setUser({
              fname:"",
              lname:"",
              phone:"",
              address:"", 
              terms:"",
           });
       
         
        }

       }
        setFormErrors(validate(user));
        setIsSubmit(true);
         

      


  
    }


    useEffect(()=>{
        // console.log(formErrors);
        if(Object.keys(formErrors).length===0 && isSubmit){
          console.log(user);
        }

    },[formErrors]);


    ///Validation//////
const validate=(values)=>{
 const errors={};

 if(!values.fname){
     errors.fname="First Name Requird";
 }

 if(!values.lname){
    errors.lname="Last Name Requird";
}

if(!values.phone){
    errors.phone="Phone No. Requird";
}

if(!values.address){
    errors.address="Address Requird";
}

if(!values.terms){
    errors.address="Please Click On Cheackbox";
}
return errors;
}



    return (
        <>
   <div>
       {Object.keys(formErrors).length === 0 && isSubmit ? (<div>Data successfully Submitted</div>) : ((<div>Data Not Submitted Yet</div>))};
    <form method="POST">
       <label for="fname">First name:</label><br/>
       <input type="text" id="fname" onChange={getUser} name="fname" value={user.fname} /><p>{formErrors.fname}</p><br/>
       <label for="lname">Last name:</label><br/>
       <input type="text" id="lname" onChange={getUser} name="lname" value={user.lname} /><p>{formErrors.lname}</p> <br/>
       <label for="fname">Phone No:</label><br/>
       <input type="text" id="phone" onChange={getUser} name="phone" value={user.phone} /><p>{formErrors.phone}</p><br/>
       <label for="lname">Address:</label><br/>
       <input type="text" id="address" onChange={getUser} name="address" value={user.address} /><p>{formErrors.address}</p> <br/>

       <label for="lname">Terms & Condition </label>
       <input type="checkbox" id="chkbox"  onChange={getUser} name="terms" value={user.terms} /><p>{formErrors.terms}</p> <br/>
       <input type="submit" value="Submit" onClick={postData}/>
    </form>
   </div>
        </>
    );
}

export default FormData;
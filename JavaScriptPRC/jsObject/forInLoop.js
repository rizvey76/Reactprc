const person={
    fname:"Atif",
    lname:"Aslam",
    age:36,
}

let txt="";
(
   
    function(){
        for(let property in person){
           txt+=person[property]+" ";
        }
        return txt;
    }
  
)();

console.log(txt);

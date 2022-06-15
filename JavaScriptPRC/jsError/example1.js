function myFunction(){
    let x=6;
    try{
         if(x=="") throw "is empty";
         if(isNaN(x)) throw "is not a number";
         if(x>10) throw "is too big";
         if(x<5) throw "is too low";
    }catch(err){
          console.log(err);
    }finally{
        console.log(x);
    }
};

myFunction();
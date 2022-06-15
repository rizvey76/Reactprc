const numbers=[1,2,3,4,5,6];



console.log(numbers.map((value,index,arr)=>{  ///return an array
   return value*2;  
 }));

 console.log(numbers.forEach((value,index,arr)=>{ 
    return value*2;  
  }));
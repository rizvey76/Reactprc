function sum(...args){
//   console.log(typeof args);
  let x=0;
   for(let element of args){
    x+=element;
    
   }

   return x;
   
};
console.log(sum(2,4,5,6,7));
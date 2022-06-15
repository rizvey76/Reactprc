myNumbers={};

myNumbers[Symbol.iterator]=function(){
    let n=0;
    done=false;
    return{
        next(){
            n+=10;
            if(n===100){done=true};
            return {value:n,done:done};
        }
    }
};

let iterator=myNumbers[Symbol.iterator]();
let txt="";

while(true){
   const result=iterator.next();
   if(result.done){
      break;
   }
   txt+=result.value+"\n";
}

console.log(txt);
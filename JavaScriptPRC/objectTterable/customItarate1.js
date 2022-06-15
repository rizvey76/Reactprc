const itarable={

}


itarable[Symbol.iterator]=function(){
    let n=0;
    let done=false;
    return{
        next(){
            n+=10;
            if(n==100){done=true;}
            return{
                value:n,
                done:done,
            }
        }
    }
}

for(let num of itarable){
    console.log(num);
}
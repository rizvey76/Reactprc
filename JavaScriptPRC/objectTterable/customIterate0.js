function myNumber(){
    let n=0;
    return {
        next:function(){
             n+=10;
             return{
                value:n,
                done:false,
             };
        }
    };
}

const n=myNumber();
n.next();
n.next();
n.next();

console.log(n.next().value);
function argObjEx(){
    let max=-Infinity;
    for(let i=0;i<arguments.length;i++){
        if(arguments[i]>max){
           max=arguments[i];
        }
    }
    return max;
}

console.log(argObjEx(4,5,6));
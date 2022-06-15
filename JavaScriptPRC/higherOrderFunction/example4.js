const languages=["Java","JavaScript","SQL"];

const newArr=[];

const customMap=(arr,fn)=>{
   for(let i=0;i<arr.length;i++){
      newArr.push(fn(arr[i])); 
   }
   return newArr;
}

console.log(customMap(languages,(language)=>{
        return language.length;
}));


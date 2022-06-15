const fruits={
    apples:{
        origin:"Australia",
        test:"Sweet",
    },
    bananas:{
        origin:"Bangladesh",
        test:"Very Sweet", 
    },

    oranges:{
        origin:"USA",
        test:"Sweet Sour", 
    }
};

const createMap=new Map(Object.entries(fruits));

let val={};
for(let [key,value] of createMap){
 
     console.log(key+":"+value.origin+"\n");
    
}
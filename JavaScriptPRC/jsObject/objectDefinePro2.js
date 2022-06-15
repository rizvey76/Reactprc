const singer={
    fname:"Atif",
    age:30,
};

Object.defineProperty(singer,"fname",{
    get:function(){
        return fname ;
    },

    set:function(val){
        fname=val;
    }
});

singer.fname="Momina";

console.log(singer.fname);


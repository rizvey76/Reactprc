//If one function can return other function or take as parameter,this is heigher order function

function hello(){
    return function(){
        console.log("Hello World!");
    }
}

hello()();
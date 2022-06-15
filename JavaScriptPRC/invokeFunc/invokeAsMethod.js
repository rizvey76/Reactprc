const fullName={
    fName:"Atif",
    lname:"Aslam",
    fullName:function(){
        return this.fName+" "+this.lname;
    }
}

console.log(fullName.fullName());
function consFunc(fname,lname){
  this.fname=fname;
  this.lname=lname;
}

const obj=new consFunc("Atif","Aslam");

console.log(obj.fname+" "+obj.lname);
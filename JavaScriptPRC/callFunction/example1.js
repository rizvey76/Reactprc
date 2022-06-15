function Product(name,price){
   this.name=name;
   this.price=price;
};

function Food(name,price){
   Product.call(this,name,price); 
   this.category="food";
};

function Toy(name,price){
  Product.call(this,name,price);
  this.category="toy";
};

const bread=new Food("Bread",25);
console.log(bread.category);
const country={
    name:"Bangladesh",
    city:{
        name:"Dhaka",
        position:"23° 46'",
    }
}

console.log(country.city.position);
           //or,
console.log(country.city['position']);
//or,
console.log(country['city']['position']);

const car1={
    name:'audi',
    maxSpeed:"300 km/h",
};

const car2={
    name:'supra',
    maxSpeed:"200 km/h",
};


const cars={...car1,car2};
console.log(cars);
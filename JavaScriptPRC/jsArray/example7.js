const cars=[
    {name:"toyota",year:2016},
    {name:"fiet",year:2017},
    {name:"dongfeng",year:2010},
];

console.log(cars.sort((a,b)=>{
    return a.year -b.year;
}));

// cars.sort((a,b)=>{
//      return a.year -b.year;
// });
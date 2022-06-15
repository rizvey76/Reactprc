const players=[
    {
    name:'Babar',
    avg:54.2,
},

{
    name:'Sakib',
    avg:38.2,
},

{
    name:'Virat',
    avg:37.3,
},
];


const heigherAvgPlayers=players.filter((player)=>{
    return player.avg>=50;
});



(function(){

    for(let i=0; i<heigherAvgPlayers.length;i++){
        console.log(heigherAvgPlayers[i].name);
     }
    

})();





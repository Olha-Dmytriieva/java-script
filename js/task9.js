var number = function(busStops){
const allPax = busStops.flat()
let newPax = 0;
let oldPax = 0;
console.table(busStops)

for(let i = 0; i < allPax.length; i +=2){
newPax += allPax[i];
// console.log(newPax)
}
for (let i = 1; i < allPax.length; i +=2){
oldPax += allPax[i];

  }
 console.log(newPax - oldPax)
}

number([[10,0],[3,5],[5,8]]),5
// number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17
// number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21
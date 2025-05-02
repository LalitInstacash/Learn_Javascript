const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString());
// console.log(typeof balance.toString());

// console.log(balance.toString().length)
// console.log(balance.toFixed(2));

const newBalance = 123.8943
// console.log(newBalance.toPrecision(2))
// console.log(newBalance.toPrecision(3))

const thousand = 1000000
// console.log(thousand.toLocaleString('en-IN'));


// ++++++++++++++++++++++++ / Maths /+++++++++++++++++++++
// console.log(Math)
// console.log(Math.abs(-4)) //convert minus value in plus
// console.log(Math.round(4.5)); //value in round of
// console.log(Math.ceil(4.2)); //after . top of the value
// console.log(Math.floor(4.9)); // After . lower of the value
// console.log(Math.min(3,5,1,9)); // Lower value
// console.log(Math.max(2,9,4,0)); // Highest value

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor (Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

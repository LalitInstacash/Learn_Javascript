const number = 400
// console.log(number);

const newNumber = new Number(400.3494)
// console.log(newNumber)

// convert in string and get length
// console.log(newNumber.toString().length)
// if value big after point or dot to make it short
// console.log(newNumber.toFixed(2))

const anotherNumber = 23.7885
// console.log(anotherNumber.toPrecision(4))
// console.log(typeof anotherNumber);

const thousand = 1000000
// console.log(thousand.toLocaleString('en-IN'));

// ======================================/ Maths /==========================
// console.log(Math)

const num = -4
// console.log(Math.abs(num)); // convert (-) number in plus

// console.log(Math.round(4.5))
// console.log(Math.ceil(4.2)) //after point value convert in higher
// console.log(Math.floor(4.9)) //after point value convert in lower

// console.log(Math.sqrt(16))
// console.log(Math.sqrt(25))
// console.log(Math.sqrt(64))
// console.log(Math.sqrt(100)) 

// console.log(Math.min(3,5,1,9));
// console.log(Math.max(5,6,3,9))

// console.log(Math.random())
// console.log(Math.random()*10)
// console.log((Math.random()*10) + 1)
// console.log(Math.floor(Math.random()*10) + 1)

const min = 1
const max = 7

console.log(Math.floor(Math.random() * (max-min))+ min);



let score = "Lalit"

// console.log(score)
// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true =>1; false => 0


let isLogedIn = 0;
// console.log(isLogedIn)
// console.log(typeof isLogedIn)

let boolionIsLogedIn = Boolean(isLogedIn)
// console.log(boolionIsLogedIn)
// console.log(typeof boolionIsLogedIn)

// 1 => true; 0 => false
// "" => false
//  "Lalit" => true

let lName = 33
// console.log(lName)
// console.log(typeof lName)

let stringInNumber = String(lName)
// console.log(stringInNumber)
// console.log(typeof stringInNumber)

// ============================ / operator /=========================

let value = 3;
let negValue = -value
// console.log(negValue)

// console.log(2 +2)
// console.log(2 - 2)
// console.log(2*2)
// console.log(2**3)
// console.log(10/2)
// console.log(2%3)

let str1 = "Hello"
let str2 = " Lalit"
let str3 = str1 + str2
// console.log(str3)

// console.log(1 + "2")
// console.log("1" + 2)
// console.log("1" + 2 +2) //jb string first me ho tb 
// console.log(1 + 2 + "2") // Jb string last me ho tb

// console.log(+true)

let gameCount = 100
gameCount++
// console.log(gameCount)


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
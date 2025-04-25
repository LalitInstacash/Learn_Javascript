// Primitive data type
// 7 types of primitive => string, number, boolearn, null, undefined, symble, bigint

const score = 100;
const valueScore = 100.3
const isLogedIn = false
const getTemp = null
let userEmail;
const name = "Lalit"

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigInt = 1214343433434343434343434343434n //last me use and for bigint to show large number
// console.log(typeof bigInt)


// Referance (Non primitive)
// Array, Objects, Functions

// Array
const arrayType = ["Lalit","Robin","Chanchal"]
console.log(arrayType);


// Objects
const myObj = {
    name : "Lalit",
    age : 34,
    hobby : "Cricket"
}
console.log(myObj)

const myFun =  function(){
    console.log("Hello world");
    
}
console.log(myFun)
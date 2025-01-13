// Data to memory to rakna or access krna k anausar 2 types
// Primitive data type

// 7 type : String, Number, Boolearn, Null, Undefined, Symble, BigInt

const name = "Lalit"
console.log(typeof name)
const score = 100
console.log(typeof score)
const isTrue = true
console.log(typeof isTrue)
const outsideTemp = null
console.log(typeof outsideTemp)
let userEmail
console.log(userEmail)

const id = Symbol("123")
const anotherId = Symbol("123")
console.table([typeof id, typeof anotherId])
// console.log(id === anotherId)

const bigNumber = 12434439847474290n
console.log(typeof bigNumber)



// Referenber (Non primitive)
// Array, Objects, Functions 
// Array
const heros = ["Shaktima", "Doga", "naagraj"]
console.log(heros)
console.log(typeof heros)

// Objects
let myObj = {
    myName : "Lalit",
    age : 35
}
console.log(myObj)
console.log(typeof myObj)

// Function
const myFun = function(){
    console.log("Hello world");
}
console.log(myFun);
console.log(typeof myFun)
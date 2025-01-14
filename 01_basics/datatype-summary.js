// Data to memory to rakna or access krna k anausar 2 types
// Primitive data type

// 7 type : String, Number, Boolearn, Null, Undefined, Symble, BigInt

const name = "Lalit"
// console.log(typeof name)
const score = 100
// console.log(typeof score)
const isTrue = true
// console.log(typeof isTrue)
const outsideTemp = null
// console.log(typeof outsideTemp)
let userEmail
// console.log(userEmail)

const id = Symbol("123")
const anotherId = Symbol("123")
// console.table([typeof id, typeof anotherId])
// console.log(id === anotherId)

const bigNumber = 12434439847474290n
// console.log(typeof bigNumber)



// Referenber (Non primitive)
// Array, Objects, Functions 
// Array
const heros = ["Shaktima", "Doga", "naagraj"]
// console.log(heros)
// console.log(typeof heros)

// Objects
let myObj = {
    myName : "Lalit",
    age : 35
}
// console.log(myObj)
// console.log(typeof myObj)

// Function
const myFun = function(){
    console.log("Hello world");
}
// console.log(myFun);
// console.log(typeof myFun)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2 types of memory
//  stack (Primitive) and Heap (Non primitive)

let myClass = "No school"
let anotherClass = myClass
anotherClass = "Leave school"

console.log(myClass)
console.log(anotherClass)

let userOne = {
    email : "test1@gmail.com",
    userID : 345634
}
let userTwo = userOne
userTwo.email = "lg@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
console.log(typeof userOne.email)
console.log(typeof userOne)
console.log(typeof userTwo)
// =========================/ Primitive data type
// 7 types => string, number, boolearn, null, undefined, bigint, symble,

const score = 100 // Number
const newScore = 100.3 // Number
const isLogedin = false //Boolearn
const tempOutside = null //null
let userEmail //undefined

const id = Symbol("123")
const anotherId = Symbol("123")
// console.log(id === anotherId)

const bigNumber = 123456734568987654n //use n for bigint
// console.log(typeof bigNumber)

// ===========================/ Reference (Non primitive)
// types => Array, Objects, Functions

// array
const superHero = ["Shaktiman", "doga", "aryaman"]

// Objects
let boject = {
    name : "Lalit",
    age : 23,
}

// Functions
const myFunction = function(){
    console.log("Hello world")
}
// console.log(typeof anotherId)


// =======================================
// Stack(Primitive), Heap memory(Non primitive)

// Stack (Primitive)
let myWebName = "lalitGuptaDotCom"
let newWebName = myWebName;
newWebName = "lgDotCom"

console.log(myWebName)
console.log(newWebName)

// Heap (Non primitive)
let userOne = {
    email : "lalitgupta@gmail.com",
    upi : "lalit@ysm"
}
let userTwo = userOne

userTwo.email = "lg@gmail.com"

console.log(userTwo.email)
console.log(userOne.email)
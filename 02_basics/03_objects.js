// Singleton

// symble


// Object literals
const jsUser = {
    name: "Lalit",
    age : 18,
    "full name": "Lalit Gupta",
    AdharNumber : 123456789098765,
    lastLogin : ["Monday","Saturday"]
}
// console.log(jsUser.name,jsUser.AdharNumber,jsUser.lastLogin[0],jsUser["full name"]);
// console.log(jsUser["age"])

jsUser.age = 32
// console.log(jsUser.age);

// Object.freeze(jsUser)
// console.log(jsUser);

jsUser.greetings = function(){
    console.log("Hello world")
}

jsUser.greetingsTwo = function(){
    console.log(`My age is ${this.age}`)
}

console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());

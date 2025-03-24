// Singleton

// symble
const mySym = Symbol("key1")


// Object literals
const jsUser = {
    name: "Lalit",
    [mySym] : "myKey1",
    "full name": "Lalit Gupta",
    age : 18,
    location : "Jaipur",
    email : "lalit.gupta@gmial.com",
    isLogedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(jsUser.name)
// console.log(jsUser.email)
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);


jsUser.email = "lalit.gupta@yahoo.com"
// Object.freeze(jsUser)
jsUser.email = "lg@gmail.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello js user")
}

jsUser.greetingTwo = function(){
    console.log(`Hello js user ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo());

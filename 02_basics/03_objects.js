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

console.log(jsUser.email)
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser.mySym)
console.log(typeof jsUser.mySym);




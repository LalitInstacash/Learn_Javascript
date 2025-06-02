// for of loop

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world"

for (const greet of greetings) {
    // console.log(greet);
}

const map = new Map()
map.set("IN", "India")
map.set("Ch", "China")
map.set("Fr", "France")

// console.log(map);
for (const [key, value] of map) {
    // console.log(`Country kye is ${key} and value is ${value}`);
}

const myObject = {
    game1 : "NFS",
    game2 : "Superman"
}

// for (const [key] of myObject) { //not working in ojects this type
//     console.log(`${key} :- ${value}`);   
// }



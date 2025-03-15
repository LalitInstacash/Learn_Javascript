let name = "Lalit"
let repoCount = 10
// console.log(name + ' ' +repoCount)

// console.log(`My name is ${name} and my repo count is ${repoCount}`)

let gameName = new String("Hello_world_how")
// console.log(gameName.length)
// console.log(gameName[0])
// console.log(gameName[2])
// console.log(gameName.__proto__)
// console.log(gameName.toUpperCase())
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(6));
// console.log(gameName.indexOf("w"))

let newString = gameName.substring(0, 7)
// console.log(newString)

const anotherString = gameName.slice(-5,11)
// console.log(anotherString)

const newStringOne = "     Lalit   "
const lastName = "      Gupta"
// console.log(newStringOne)
// console.log(newStringOne.trim());
// console.log(`${newStringOne.trim()} ${lastName.trim()}`)

const url = "https://lalit%20gupta.com"
// console.log(url)
// console.log(url.replace("%20", "_"))
// console.log(url.includes("lalit"))
// console.log(url.includes("Hello"));

// console.log(gameName.split("_"))

const array1 = [5, 12, 8, 130, 44];

let index = 1;

// console.log(`An index of ${index} return ${array1.at(index)}`)
let index1 = -3
// console.log((`another index ${index1} return ${array1.at(index1)} `));

const str1 = "Hello"
const str2 = "World"

console.log(str1.concat (" ", str2))
console.log(str2.concat (", ",  str1));


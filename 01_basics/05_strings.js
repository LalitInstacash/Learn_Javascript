const name = "Lalit"
const repoCount = 10

// console.log(name + repoCount + " value");
// console.log(`My name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String("Lalit 123")
// console.log(gameName)

// console.log(gameName[1]);
// console.log(gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("l"));

const newString = gameName.substring(0,4)
// console.log(newString)

const anotherString = gameName.slice(-9,4)
// console.log(anotherString);

const anotherStringOne = "      Lalit Gupta     "
// console.log(anotherStringOne)
// console.log(anotherStringOne.trim())

const url = "https://lggupta.com/lg%20newChan"
// console.log(url.replace('%20', '_'))
// console.log(url.includes("gupta"))

// console.log((gameName.split(" ")));

const array = [12,11,10,9,8]
let indexof = 2
console.log(`Number of ${indexof} in the ${array.at(indexof)}`)

indexof = -2
console.log(`Number of ${indexof} in the ${array.at(indexof)}`)
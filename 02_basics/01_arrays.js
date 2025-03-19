const myArray = [0,1,2,3,4,5]
// console.log(myArray[0]);
// console.log(myArray[2])

const myHellos = ["Shaktiman", "Gangadhar"]
// console.log(myHellos[1])

const myArray2 = new Array(1,2,3,4)
// console.log(myArray2[2])

myArray.push(6)
// console.log(myArray);

myArray.push(7)
// console.log(myArray)

myArray.pop()
// console.log(myArray)

myArray.unshift(9)
// console.log(myArray)

myArray.shift()
// console.log(myArray)

const newArray = myArray.includes(9)
// console.log(newArray)

// console.log(myArray.indexOf(9));
// console.log(myArray.indexOf(19));
// console.log(myArray.indexOf(2));

const newArray2 = myArray.join()
// console.log(myArray)
// console.log(newArray2)
// console.log(typeof newArray2)

console.log("A ", myArray)

const myn1 = myArray.slice(1,3)
console.log(myn1)

console.log("B ", myArray)

const myn2 = myArray.splice(1,3)
console.log(myn2)

console.log("C ", myArray) //change in original array

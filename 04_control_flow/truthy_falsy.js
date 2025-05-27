const userEmail = []

if(userEmail){
    console.log('Got user email');
}else{
    console.log("Don't have user email");
}

// Falsy value
// false, 0, -0, NaN, null, undefined, "", BigInt 0n

// Truthy value
// "0", "false", " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null undefined

let null1;
// null1 = 5 ?? 10
// null1 = null ?? 10
// null1 = undefined ?? 15
null1 = undefined ?? 15 ?? 23

console.log(null1);

// Terniary operator
// condition > true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("Less then 80") : console.log("More then 80");

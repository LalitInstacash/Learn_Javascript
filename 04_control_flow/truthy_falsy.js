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

if(userEmail.length === 0){
    console.log("Object is empty");
}
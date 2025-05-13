// var c = 200 // globle scope
let a = 200

if(true){ // block scope
    let a = 10
    const b = 20
    // var c = 30
    // console.log(`inner Number is ${a}`);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const userName = "Lalit"

    function two(){
        const website = "Instacash"
        console.log(userName);
    }
    // console.log(website);

    // two()
    // console.log(userName);
    
}
// one()


if(true){
    const userName = "Lalit"
    if(userName === "Lalit"){
        const website = " Instabid"
        // console.log(userName + website);
    }
    // console.log(website);
    
}
// console.log(userName);


// +++++++++++++++++++++++++++ interesting

console.log(addOne(5));

function addOne(num){
    return num + 1
}
// addOne(5)

// addTwo(10) //can't do this
const addTwo = function(num){
    return num + 1
}
addTwo(10)
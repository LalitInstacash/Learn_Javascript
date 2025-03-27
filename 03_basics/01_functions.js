function sayMyName(){
    console.log("L");
    console.log("A");
    console.log("L");
    console.log("I");
    console.log("T");
}
// sayMyName()

// function addTwoNumber (number1,number2){
//     console.log(number1+number2);
// }
function addTwoNumber (number1,number2){
    // let result = number1 + number2
    // console.log("Lalit")
    // return result
    // console.log("Lalit") //Result p bad kuch be print ni hota h

    return number1 + number2
}
const result = addTwoNumber(4, 34)
// console.log("Result", result)

function userJustLogedIn(username = "sam"){
    if(username === undefined){
        console.log(`Please enter username`)
        return
    }
    return `${username} just loged in`
}
// console.log(userJustLogedIn("Lalit"));
// console.log(userJustLogedIn());

function calculatePrice(var1, var2, ...num){
    return num
}
// console.log(calculatePrice(100, 300, 500,200,600));

const user = {
    username : "Lalit",
    price : 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and his course price is ${anyObject.price}`);   
}
// handleObject(user)
handleObject({
    username : "lg",
    price : 399
})

const myNewArray = [100,300,200,400]

function returnSecondArray(getArray){
    return getArray[2]
}
// console.log(returnSecondArray(myNewArray));
console.log(returnSecondArray([100,300,200,400]));

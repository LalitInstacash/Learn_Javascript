function sayMyName(){
    console.log("L");
    console.log("A");
    console.log("L");
    console.log("I");
    console.log("T");
} 
// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2){
    // const result = number1 + number2
    // return result
    return number1 + number2
}

const result =  addTwoNumber(4 , 3)

// console.log("Result", result);

function loginUserMassage(userName = "sam"){
    if(userName === undefined){
        console.log("Please enter user name");
        return
    }
    return `${userName} just loged in`
}
// console.log(loginUserMassage("Lalit"));
// console.log(loginUserMassage("Lalit"));

function calculateCartPrice(get1, get2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,700))

const user = {
    userName : "Lalit",
    price : 199
}

function handleObject(anyObject){
// console.log(`User name is ${anyObject.userName} and course price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    userName : "Robin",
    price : 499
})

const myNewArray = [100,400,200,500]

function returnSecondValue(getValue){
    return getValue[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300,500,200,1000]));

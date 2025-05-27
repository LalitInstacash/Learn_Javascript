//if

// const isUserLogedIn = true
// const temperature = 40

// if(temperature <= 40){
//     console.log("Temperature is less the 40");   
// }else{
//     console.log("Tempeature is above 50");
// }

// <, >, <=, >=, !=, ==, ===, !==

// const score = 200

// if(score > 100){
//     const power = "Fly"
//     console.log(`user power is ${power}`);
// }
// console.log(`user power is ${power}`);

// const balance = 1000
// if(balance> 500) console.log('Test');

// if(balance < 500){
//     console.log(`Less then 500`);
// } else if(balance < 750){
//     console.log(`Less then 750`);
// }else if (balance < 900){
//     console.log(`Less then 900`);
// }else{
//     console.log(`Balance less then 1200`);   
// }

const userLogedIn = true
const debitCard = true
const loginFromGoogle = false
const loginFromGmail = true

if(userLogedIn && debitCard && 2==2){
    console.log(`Now you buy courses`);
}

if(loginFromGoogle || loginFromGmail){
    console.log(`You are logedin`);
}

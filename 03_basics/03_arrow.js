const user = {
    userName : "Lalit",
    price : 999,
    welcomeMassage : function(){
        console.log(`${user.userName}, welcome to our website`);
        console.log(this);
        
    }
}
// user.welcomeMassage()
// user.userName = "Sam"
// user.welcomeMassage()

// console.log(this);

// function chai(){
//     console.log(this);
    
// }
// chai()

// const chai = function(){
//     const userName = "Lalit"
//     console.log(this.userName);
// }

// const chai = () =>{
//     const userName = "Lalit"
//     console.log(this.userName);
// }
// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// const addTwo = (num1 , num2) => num1 + num2
// const addTwo = (num1 , num2) => (num1 + num2)
const addTwo = (num1 , num2) => ({username : "Lalit"})

console.log(addTwo(4,3));

// Singleton
// const tinderUser = new Object()
// console.log(tinderUser)


// Non singleton user
const tinderUser2 = {}

tinderUser2.id = "abc124"
tinderUser2.name = "Sammy"
tinderUser2.isLogedIn = false

// console.log(tinderUser2)

const regularUser = {
    email : "user@gmail.com",
    fullName : {
        userFullName:{
            firstName : "Lalit",
            lastName : "Gupta"
        }
    }
}

// console.log(regularUser.fullName)
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1 : "A", 2 : "B"}
const obj2 = {3: "C", 4: "D"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign ({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3)

console.log(tinderUser2);
console.log(Object.keys(tinderUser2));
console.log(Object.values(tinderUser2))
console.log(Object.entries(tinderUser2));

console.log(tinderUser2.hasOwnProperty('isLogedIn'));






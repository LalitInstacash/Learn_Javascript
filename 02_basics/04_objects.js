// const tinderUser = new Object() // singelton object
const tinderUser = {}

tinderUser.id = "23erer34"
tinderUser.name = "Dundin"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "user@gmail.com",
    fullName :{
        UserFullName :{
            firstName : "Lalit",
            LastName : "Gupta"
        },
        age: 43
    }
}
// console.log(regularUser.fullName.UserFullName.firstName, regularUser.fullName.age);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj3 = {5 : "a", 6 : "b"}


// const obj4 = Object.assign({}, obj1, obj2, obj3);
const obj4 = {...obj1, ...obj2}
// console.log(obj4);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName : "Javascript in hindi",
    coursePrice : 999,
    courseInstructor: "Hitesh sir"
}
console.log(course.courseInstructor);

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor : instructor} = course
console.log(instructor);

// Json
// {
//     "name" : "Lalit",
//     courseName : "Js in hindi",
//     "coursePrice" : 200
// }
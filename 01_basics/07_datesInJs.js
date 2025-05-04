// Dates

const myDate = new Date();
// console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log((myDate.toUTCString()));
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// const myCreatedDate = new Date(2025,4,4)
// console.log(myCreatedDate.toDateString())

const myCreatedDate1 = new Date(2025,4,4, 16,30)
// console.log(myCreatedDate1.toLocaleString())

// const myCreatedDate2 = new Date("2023-05-04")
const myCreatedDate2 = new Date("04-05-2025")
// console.log(myCreatedDate2.toLocaleString());

const myTimeStam = Date.now()
// console.log(myTimeStam)
// console.log(myCreatedDate2.getTime());

// console.log(Math.floor(Date.now()/1000));

const newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getMinutes());
// console.log(newDate.getTime());

newDate.toLocaleString('default',{
    weekday:'long'
})
console.log(newDate);

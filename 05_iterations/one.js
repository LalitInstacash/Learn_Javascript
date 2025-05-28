// For

// for (let index = 1; index <= 10; index++) {
//     const element = index;
//     console.log(element);
// }

for (let i = 1; i <= 4; i++) {
    // console.log(`Outer loop value is ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value is ${j} and outer loop value is ${i}`);
        // console.log(i + ' * ' + j + ' = ' + i*j);
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

const myarray = ['Flash', 'Batman', 'Superman']
// console.log(myarray.length);

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
}

// for (let index = 0; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detect is 5`);
//         break
//     }
//     console.log(`Value of index is ${index}`);
// }

for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detect is 5`);
        continue
    }
    console.log(`Value of index is ${index}`);
}


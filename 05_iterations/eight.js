const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (acc, currvVal) {
//     console.log(`${acc} and current value is ${currvVal}`);
    
//     return acc + currvVal    
// }, 0)

// const myTotal = myNums.reduce( (acc, current) => acc + current, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'Js course',
        price : 2999
    },
    {
        itemName: 'php course',
        price : 999
    },
    {
        itemName: 'c++ course',
        price : 5999
    },
    {
        itemName: 'data since course',
        price : 7999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price,0)
console.log(priceToPay);

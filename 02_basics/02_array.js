const marvel_heros = ["thor", "IronMan", "Spiderman"]
const dc_heros = ["Superan", "Flash", "Batman" ]

// console.log(marvel_heros)
// console.log(dc_heros)

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][0]);

const allHeros =  marvel_heros.concat(dc_heros)
// console.log(allHeros);
// console.log(allHeros[4]);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3,4,5,[6,7],5,6,[2,3,[4,5]]]
const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name:"Hitesh"})) //interesting

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3));



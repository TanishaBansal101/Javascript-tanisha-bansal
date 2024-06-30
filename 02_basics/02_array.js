const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]
const cartoon = ["doraemon","sinchan"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const allNewHeros = [...marvel_heros,...dc_heros,...cartoon]
console.log(allNewHeros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArray = another_array.flat(Infinity)
console.log(realAnotherArray);


console.log(Array.isArray("Tanisha"));
console.log(Array.from("Tanisha"));
console.log(Array.from({name:"tanisha"}));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
const myArr = [3,4,5,6,7]
console.log(myArr);
//console.log(myArr[1]);

const games = ["circket","badminton","ludo","carrom"]
console.log(games);

const myArr1 = new Array()

myArr.push(8)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(8)
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(8));
console.log(myArr.indexOf(8));
console.log(myArr.indexOf(4));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice, splice

console.log("A",myArr);

const n1 = myArr.slice(1,3)
console.log(n1);

console.log("B",myArr);

const n2 = myArr.splice(1,3)

console.log("C",myArr);
console.log(n2);
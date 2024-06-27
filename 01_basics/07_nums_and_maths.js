const score = 300;
console.log(score);

const balance = new Number(200)
console.log(balance);
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.896
console.log(otherNumber.toPrecision(3));

const oneNumber = 233.896
console.log(oneNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(3.6));
console.log(Math.ceil(2.3));
console.log(Math.floor(7.8));
console.log(Math.min(-5,7,5));
console.log(Math.max(-5,7,5));
console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)+min))
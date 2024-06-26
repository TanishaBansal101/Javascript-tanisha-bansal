let value=2
let negValue=-value
console.log(negValue);

console.log(4+4);
console.log(4-4);
console.log(4*4);
console.log(4**4);
console.log(4/4);
console.log(4%3);

let str1="Tanisha"
let str2=" bansal"
let str3=str1+str2
console.log(str3);

console.log(1+"2");
console.log("1"+2);
console.log("1"+"2");
console.log("1"+2+3);
console.log(1+2+"4");

console.log(true);
console.log(+true);
//console.log(true+);   not allowed
console.log(+"");

let gamecounter=50
++gamecounter;   // gamecounter++ is allowed in this case and give same output
console.log(gamecounter);

const name="Tanisha"
const repoNumber=10
//console.log(name+repoNumber+" Value");

const gameName= new String('tanisha-bansal')

console.log(gameName[1]);
console.log(gameName.__proto__);  // this syntax represents object

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('n'));

//const newString=gameName.substring(0,5)
//console.log(newString);

const newOneString=gameName.substring(-4,5)
console.log(newOneString);

//const anotherString=gameName.slice(2,5)
//console.log(anotherString);

//const anotherOneString=gameName.slice(-2,5)
//console.log(anotherOneString);

const newStringOne = "    tanisha "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://tanisha.com/tanisha%20bansal"
console.log(url.replace('%20' , '-'));
console.log(url.includes('sundar'));
console.log(gameName.split('-'));
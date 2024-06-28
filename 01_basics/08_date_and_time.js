let myDate = new Date()

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toISOString());
console.log(myDate.toUTCString());

let myCreateDate = new Date(2024,0,22)
console.log(myCreateDate.toDateString());

//let myCreateDateOne = new Date(2024,0,22,5,4)
let myCreateDateOne = new Date("2024-02-22")
console.log(myCreateDateOne.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDateOne.getTime());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",                                               // ctrl+space
})
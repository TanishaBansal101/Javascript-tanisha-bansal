let a = 10;
const b = 20;
var c = 300;
console.log(a);
console.log(b);
//console.log(c);
//outside this function , global scope
if (true) {
  //block scope
  let a = 100; //it shows error
  const b = 20; //it shows error
  var c = 30;
  console.log("Inner:", a);
} 

//console.log(a);
//console.log(b);
console.log(c);


function one(){
    const username="tanisha"

    function two(){
        const website="github"
        console.log(username);
    }
    //console.log(website);

    two()
}

one()

if(true){
    const username="tanisha"
    if(username==="tanisha"){
        const website="github"
        console.log(username+website);
    }
    //console.log(website);
}
//console.log(username);

console.log(addone(7));
function addone(num){
    return num+1
}

addTwo(6)
const addTwo=function(num){
    return num+2
}
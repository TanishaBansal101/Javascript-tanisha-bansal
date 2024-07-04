function sayMyName(){
    console.log("T");
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
}
sayMyName()     //()=> use for execution

function addTwoNumbers(number1, number2){
    //console.log(number1+number2);
    //let result = number1+number2
    //return result
    return number1 + number2
    console.log("Tanisha");   // after return nothing will print
}

const result = addTwoNumbers(3,5)   //(parameter,argument)

console.log("Result :" , result);

function loginUserMessage(useranme){
   // if(username === undefined){
   if(!username){
        console.log("Please enter a username");
        return
    }
    return '${username} just logged in'
}

//console.log(loginUserMessage("tanisha"))

//function calculateCartPrice(num1){
//    return num1
//}
//console.log(calculateCartPrice(200,400,500,1000));   return 200

//function calculateCartPrice(...num1){
 //      return num1
 //   }
//console.log(calculateCartPrice(200,400,500,1000));  return [ 200, 400, 500, 1000 ]

function calculateCartPrice(val1, val2,...num1){
    return num1
 }
console.log(calculateCartPrice(200,400,500,1000)); // return [ 500, 1000 ]

const user = {
    username: "tanisha",
    price: 199
}

function handleObject(anyobject){
    console.log('Username is ${anyobject.username} and price is ${anyobject.price}');
}

//handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [100,300,500]
function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,300,500]));
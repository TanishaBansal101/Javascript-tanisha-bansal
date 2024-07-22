//task 1
let num;
function checkValue(num) {
  let result;
  if (num > 0) {
    result = "positive";
  } else if (num < 0) {
    result = "negative";
  } else {
    result = "zero";
  }
  return result;
}
console.log(checkValue(0));

//task 2
let age;
function eligibleAge(age){
    let result;
    if(age>=18){
        result="Eligible";
    }
    else{
        result="Not Eligible";
    }
    return result;
}
console.log(eligibleAge(17));

//task 3
let a=5,b=3,c=6;
function largestNum(a,b,c){
    let result;
    if(a>b&& a>c){
        result="a";
    }
    else if(b>c&&b>a){
        result="b";
    }
    else{
        result="c";
    }
    return result;
}
console.log(largestNum(a,b,c));

//task 4
let day=6;
switch(day){
    case 1:
    console.log("Monday");
    break;
    case 2:
    console.log("Tuesday");
    break;
    case 3:
    console.log("Wednesday");
    break;
    case 4:
    console.log("Thrusday");
    break;
    case 5:
    console.log("Friday");
    break;
    case 6:
    console.log("Saturday");
    break;
    case 7:
    console.log("Sunday");
    break;
    default:
    console.log("default");
}

//task 5
let score=88;
switch(score){
    case 1:
        if(score=100){
    console.log("Grade-A");
    }
    break;
    case 2:
        if(score>=80 && score<100){
    console.log("Grade-B");
    }
    break;
    case 3:
        if(score>=55 && score<80){
    console.log("Grade-C");
    }
    break;
    case 4:
        if(score>=30 && score<55){
    console.log("Grade-D");
    }
    break;
    case 5:
        if(score>=10 && score<30){
    console.log("Grade-F");
    }
    break;
    default:
    console.log("default");
}

//task 6
const n=9;
const result=n%2==0?"Even":"Odd";
console.log(result);

//task 7
let year=2024
function checkLeapYear(year){
    let status;
    if((year%4==0&&year%100!=0)||year%400==0){
        status = "Leap year";
    }
    else{
        status="Not leap year";
    }
    return status;
}
console.log(checkLeapYear(year));
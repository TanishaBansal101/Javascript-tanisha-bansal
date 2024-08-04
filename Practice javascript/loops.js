// task 1
for (let i = 1; i <= 10; i++) {
  const element = i;
  console.log(element);
}

// task 2
let a = 5;
for (let i = 1; i <= 10; i++) {
  console.log(a + "*" + i + "=" + a * i);
}

//task 3
let n = 1;
let sum = 0;
while (n <= 10) {
  sum += n;
  n++;
}
console.log("Sum of natural numbers:", sum);

//task 4= print number from 10 to 1
let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}

// task 5= print number from 1 to 5
let num = 1;
do {
  console.log(num);
  num++;
} while (num <= 5);

// task 6 = calculate factorial of a number
let fact=5;
function factorial(fact){
  let ans=1;
  if(fact===0){
    return 1;
  }
  for(let i=2;i<=fact;i++){
    ans=ans*i;
  }
  return ans;
}
console.log(factorial(fact));


// task 7= pattern
let row = 5;
for (let i = 1; i <= row; i++) {
  let str = "*";
  console.log(str.repeat(i));
}

// task 8=continue
for(num1=1;num1<=10;num1++){
  if(num1==5){
    continue;
  }
  console.log(num1);
}

// task 9=break
for(num2=1;num2<=10;num2++){
  if(num2==7){
    break;
  }
  console.log(num2);
}
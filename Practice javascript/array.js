// task 1
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

// task 2
console.log(arr1[0]);
console.log(arr1[4]);

// task 3
arr1.push(7);
console.log(arr1);

// task 4
arr1.pop(7);
console.log(arr1);

// task 5
arr1.shift(1);
console.log(arr1);

// task 6
arr1.unshift(9);
console.log(arr1);

// task 7=>use map method
const myNum = [2, 3, 4, 5, 6, 7, 8, 9];
const newNum = myNum.map((number) => number * 2);
console.log(newNum);

// task 8=>use filter method
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = myArray.filter((num) => num % 2 == 0);
console.log(newArray);

// task 9=>use reduce method
const myArray1 = [1, 2, 3, 4, 5];
const newArray1 = myArray1.reduce(
  (accumulator, current_value) => accumulator + current_value,
  0
);
console.log(newArray1);

// task 10
const arr = [];
for (let i = 1; i <= 10; i++) {
  arr.push(i);
}
console.log(arr);

// task 11=>use for-each loop

const arr2 = [];
for (let i = 1; i <= 10; i++) {
  arr2.push(i);
}
const arr3 = [];
arr2.forEach((item) => {
  arr3.push(item);
});
console.log(arr3);

//task 12=>two dimensional array
const array = [];
let rows = 2;
let cols = 2;
for (let i = 0; i <= rows; i++) {
  array[i] = [];
  for (let j = 0; j <= cols; j++) {
    array[i][j] = j;
  }
}
console.log(array);

// task 13
console.log(array[1][2]);

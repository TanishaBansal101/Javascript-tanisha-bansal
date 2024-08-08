const myNums = [22, 3, 4];
//const myTotal =myNums.reduce(function(accumulator,curernt_value){
//    console.log('acc',accumulator, 'and cur_val',curernt_value);
//    return accumulator+curernt_value
//},5)

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(myTotal);

const shoppingCart = [
  {
    itemName: "py course",
    price: 1000,
  },
  {
    itemName: "js course",
    price: 2000,
  },
  {
    itemName: "c++ course",
    price: 2000,
  },
];
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);

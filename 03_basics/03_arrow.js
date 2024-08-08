const user = {
  username: "tanisha",
  price: 500,

  welcomeMessage: function () {
    console.log(user.username, ", Welcome to website");
    //console.log(this);
  },
};
//user.welcomeMessage()
//user.username="bansal"
//user.welcomeMessage()
console.log(this);

function chai() {
  //console.log(this);
  let username = "tanisha";
  console.log(this.username);
}
chai();

//const chai=function (){
//    let username="tanisha"
//   console.log(this.username);
//}

const chai1 = () => {
  let username = "tanisha";
  console.log(this);
}
chai1();

//const addTwo=(n,m)=>{
 //   return n+m
//}

//const addTwo=(n,m)=> n+m
//const addTwo=(n,m)=> (n+m)
const addTwo=(n,m)=> {username:"tanisha"}
console.log(addTwo(9,7));

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Tanisha",
    "full name": "Tanisha Bansal",
   //mySym: "mykey1",
    [mySym]: "mykey1",
    age: 20,
    location: "Bharatpur",
    email:"bansaltanisha101@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Tuesday","Wednesday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
//console.log(JsUser.full name);   give error
console.log(JsUser["full name"]);
//console.log(JsUser.mySym);
//console.log(typeof JsUser.mySym);

console.log(JsUser[mySym]);

JsUser.email = "tanisha@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "tanisha@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log('Hello JS user, ${this.name}');
}
console.log(JsUser.greeting());
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());
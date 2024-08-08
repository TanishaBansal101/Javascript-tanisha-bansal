// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
  console.log("DB connected");
})();

/*(function aurcode(){
    console.log('DB CONNECTED TWO');  
})()*/

//Arrow function
(() => {
  console.log("DB CONNECTED TWO");
})();

// Unnamed IIFE
((name) => {
  console.log("DB CONNECTED TWO ${name}");
})("Tanisha");


// do IIFE ko sath me likhne ke liye semicolon lgana pdta hai
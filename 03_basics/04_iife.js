// ++++++++++++++Immediately Invoked Function expressions++++++++++++++++
// we use iife to remove the pollution of global scope variables.....
(function () {
console.log(`hi`);

    
})(); //   This semicolon is necessary because iife does not know where to end its scope 
// Just wrap the function definition into a parenthesis ans use a caller parenthesis to call the function
// we can also have arrow functions
(()=>{
    console.log(`DB CONNECTED`);
    
}) ();

(function chai() {
    // Named IIFE :- which has name
    console.log();
    
})
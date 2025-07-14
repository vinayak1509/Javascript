const user = {
    username:"vinayak",
    price: 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// 'this' keyword represents the current context
// user.welcomeMessage(); // prints the whole object with username  = vinayak
// user.username= "vinau";
// user.welcomeMessage();// prints the whole object with username = vinau
// console.log(this); // {} :-  because we are in node environment but when we print this same thing in browser, we get window which is the global object in browser but not in node


function chai(){
    let username = "vinayak"
    console.log(this.username); // undefined:-  this only works in objects not in functions
    
}
// chai();




//+++++++++++++++++++++++ Arrow Function +++++++++++++++++++++++
const chai1 = ()=>{
    console.log(this); // {} :- when we print this in arrow function, it gives empty parenthesis but when we print it in normal function as above we get some very big valuess
    
}
// chai1();

// const addTwo = (num1,num2)=>{
//     return num2+num1; // Explicit return
// }

// const addTwo = (num1,num2)=> (num2+num1);  :- Implicit return (no need to use return keyword)


console.log(3,4);

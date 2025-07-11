function saymyName(){
    console.log("a");
    console.log("b");
    console.log("c");
    console.log("d");
    console.log("e");
    
}
// saymyName is only the reference of the function....to run it we need to use ();
// console.log(typeof saymyName); // function
function addtwoNumbers(number1, number2,number3){
    return number1+number2+number3;
    
}

// console.log(addtwoNumbers(3,4,"a")); //7a

function userloginMessage(username){
    return `${username} just logged in`;
}
// console.log(userloginMessage()); undefined just logged in
// function userloginMessage(username = "sam") -----> if nothing is passed then sam is printed in place of username



function calculateCartPrice(...num1){ // (...) is rest operator, it converts all the values into an array
    return num1;
}

// console.log(calculateCartPrice(2,2,3,4,5)); [ 2, 2, 3, 4, 5 ]

function calculatePrice(val1, val2, ...num1){
    return num1;
}
// console.log(calculatePrice(10,2, 4,5,6)); [ 4, 5, 6 ] 10 goes to val1 and 2 goes to val2 rest is converted to arrya num1


const user = {
    username : "vinayak",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)


// handleObject({
//     username:"sama",
//     price:100
// })  you can directly pass the object definition in function



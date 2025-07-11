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

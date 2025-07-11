


if(true){
let a = 10
const b = 20
var c = 30
}

// console.log(a);  error :a is out of scope
// console.log(b); error : b is out of scope

// console.log(c); 30 

function one(){
    const username = "vinayak"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()
    
}
one()


// +++++++++++++++++++ intersting ++++++++++++++++++
addone(5); // no error you can acces the function before initialisation if you declare like this
function addone(num){
    return num+1;
}

addtwo(5) // error: you cant access the function before initialisation if you store it in a variable like this
const addtwo  = function(num){
    return num+2
}


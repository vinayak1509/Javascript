// singleton : whenever we create object through constructor method a singleton object is created
// Object.create 


// object literals
const mysym = Symbol("ms1");
const mysym1 = Symbol("ms2");
const user ={
    name : "vinayak",
    "full name": "vinayak thakur", // Now, this can never be accessed using dot operator only user["full name"]
    age: 18,
    mysym :"mysymbol", // this won't create any problem but this is not being treated as symbol.
    // how to use as symbol
    [mysym1]:"mysymbol1",
    location: "patna",
    email: "vinayak@google.com",
    isLoggedin : false,

}

// How to access object's properties
// console.log(user.name);
// console.log(user["name"]);
// console.log(typeof user[mysym1]);

// Object.freeze(user); // values cannot be changed.
user.name = "vinu";
// console.log(user);

user.greeting = function(){
    console.log("Hello Js user");
    
}
user.greeting();



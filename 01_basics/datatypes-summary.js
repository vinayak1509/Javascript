// Primitive 

// 7 types : String ,Number , boolean, null, undefined, Symbol , Bigint


// java Script is a dynamically typed language

// Refernce (Non primitive)

// Array, Objects, Functions
// type of non primitive data types is object
// type of bigint is Undefined




//---------------------------------------------Memory--------------------------------------------------//
//  Stack(primitive),  heap(non-primitive)
// Stack memory is used in case of a primitive datatype and heap mem. for non-primitive

// Copy of primitive is passed
// Reference of non-primitive is passed

// for ex:
// let name = "vinayak"
// let anothername = name
// anothername = "thakur" // this will only change anothername as a copy is passed and whatever change is done in the copy, it is not affected in the original

// console.log(name) // vinayak
// console.log(anothername) // thakur 

// In case of objects , reference is passed:
 let user1 = {
   email = "vinayak.gmail.com"
   upi = "123"
 }
let user2 = user1 // NOW, BOTH USER1 AND USER2 ARE POINTING TO THE SAME LOCATION IN THE HEAP MEMORY , NO COPY IS PASSED, ONLY REFERENCE IS PASSED, 
                //        ANY CHANGE IN USER2 WILL BE REFECTED IN ALL THE REFERENCES
user2.email = "thakur.gmail.com"
console.log(user1.email) //thakur.gmail.com
console.log(user2.email) //thakur.gmail.com








const tinderUser = new Object();
tinderUser.name = "vinayak"
tinderUser.id = "vinaya@gmail.com"

tinderUser.isloggedIn=false;

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname : {
            firstname: "vinayak",
            lastname: "thakur"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
// merge two or more objects
const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}
// assign method:------
// const obj3 = {obj1,obj2}; // same problem as merging array object ke ander object
// console.log(obj3); { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3  = Object.assign({},obj1,obj2); // braces are optional

 // spread operator

 const obj3 = {...obj1,...obj2}

console.log(obj3);




console.log(Object.keys(tinderUser)); // puts all keys into an array
console.log(Object.values(tinderUser)); // puts all the values into an array
console.log(Object.entries(tinderUser)); // array of pairs where each element of array is a key value pair
 


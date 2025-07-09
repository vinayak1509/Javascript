const myArr = [0,1,2,3,4,5]
// const newArr = new Array(2,3,4,"vinayak")


// Array methods

// myArr.push(7);
// myArr.push(6);
// myArr.pop();

// myArr.unshift(9) //[9, 0, 1, 2, 3, 4, 5]
// myArr.shift(); //left shift

// console.log(myArr.includes(9)) // false: boolean
// console.log(myArr.indexOf(9)) // -1 : not present

// const newArr = myArr.join()

// console.log(myArr);  //[0,1,2,3,4,5]
// console.log(newArr); // 0,1,2,3,4,5 :- converts the array into string


//Slice, Splice

/*
Slice returns a section of an array (from start index to one index before end) without altering the original array
while, 
Splice returns a section of an array (from the start index to end index including but it removes that entire section from the array )
*/
console.log("A ", myArr);

const mn1 = myArr.slice(1,3);
console.log(mn1);
console.log("B ", myArr);


const mn2 = myArr.splice(1,3);
console.log(mn2);

console.log("c ", myArr);


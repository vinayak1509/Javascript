const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes =["superman", "flash", "batman"];
// marvel_heroes.push(dc_heroes); // it treats dc heroes as a single element and pushes it into the dc heroes array as a whole array


// console.log(marvel_heroes); //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// const all_heroes = marvel_heroes.concat(dc_heroes);

// Concat appends the element of dc heroes at the end of marvel heroes and returns a new array, it does not change the existing array
// console.log(all_heroes); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const all_new_heroes = [...marvel_heroes,...dc_heroes]; // same as concat :- this can combine more than 2 arrays element by element
// console.log(all_new_heroes);


// // flat method
// const arr = [1,2,3,4,[5,6,7],7,8,[3,4,5,[5,6]]]
// // if you want to merge all the array elements to some depth you can use flat method
// const newArr = arr.flat(Infinity); //infinity takes the necessary depth automatically
// console.log(newArr); 


console.log(Array.isArray("vinayak")); // false
console.log(Array.from("vinayak")); // converts parameter to array
console.log(Array.from({name:"vinayak"})); // gives an empty array because we will have to specify either we want to create araay based on key or value


let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3)); // converts into array



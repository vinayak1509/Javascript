//For-in loop
const obj = {
    JS : 'JavaScript',
    cpp: 'C++',
    java:'Java'
}

for (const key in obj) {
  console.log(`${key}:- ${obj[key]}`);
  
}

const programming = ["js","c++",'java', 'html']
for (const key in programming) {
    console.log(programming[key]); // this way, we can access the array element using for in loop
    
}

// For-of loop on array directly returns the array element but For-in loop returns the index (same for objects, it returns the key not the value)

// Array specific loops
 // For-of loop
const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const element of greetings) {
    if(element==' ') continue
    // console.log(element);  
}

//Maps

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'America')
map.set('Fr', 'france')
// console.log(map);

for (const key of map) {
    // console.log(key);  // this prints the whole map  [ 'IN', 'India' ]
                                                    // [ 'USA', 'America' ]
                                                    // [ 'Fr', 'france' ]
    
}
for (const [key,value] of map) {
    console.log(`${key} :- ${value}`);
}

const myobj = {
    'game1': 'NFS',
    'game2' : 'Spiderman'
}
for (const [key,value] of myobj) {
    console.log(`${key} :- ${value}`); // error :- myobj is not iterable
}

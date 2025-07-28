const coding = ['js','c++', 'java', 'html']

// coding.forEach(function (item){
//     console.log(item);
    
// })


coding.forEach((item)=>{
// console.log(item);

})

function print(item){
    // console.log(item);
    
}
coding.forEach(print) // you can also a function which is created outside this foreach parenthesis...don't execute here just pass the reference

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
    
})

const myCoding  = [
    {
    langName : 'JavaScript',
    langFile : 'js'
    },
    {
    langName : 'Cpp',
    langFile : 'c++'
    },
    {
    langName : 'Python',
    langFile : 'py'
    }

]
myCoding.forEach((item)=>{
    console.log(item.langName);
    
})
const OBj={
    firstname:"vinayak",
    lastname: "thakur"
}
//You can't use for_each loop in objects. to use it first convert the object into an array like:
Object.entries(OBj).forEach(([Key,value])=>{
    console.log(`${Key}: ${value}`);
    
}) 

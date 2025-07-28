const myNums = [1,2,3]
// const myTotal = myNums.reduce((acc,currval)=>{
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc+currval
// },0)


// arrow function:
const myTotal = myNums.reduce((acc,currval)=> acc+currval,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemnam : "js",
        price: 1999
    },
    {
        itemnam : "python",
        price: 2999
    },
    {
        itemnam : "webdev",
        price: 3999
    },
    {
        itemnam : "MobileDev",
        price: 6999
    }
]
const total = shoppingCart.reduce((acc,curr)=>(acc+curr.price),0)
console.log(total);

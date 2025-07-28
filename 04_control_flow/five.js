const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNums.map((num)=> (num+10))

const newNum = myNums
            .map((num)=> num*10) // this returns elements after multiplying with 10
            .map((num)=>num+1)  // this map get array as [10,20,30,40......] and returns after adding 1 to all elements [11,21,31,....]
            .filter((num)=>num>40) // this filter gets araay as [11,21,31,41.....] and return all the elements greater than 40 [41,5,61,...]

console.log(newNum);


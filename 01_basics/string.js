const name = "vinayak"
const repoCount = 50
console.log(name + repoCount + "value");
console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);
const gameName  =new  String("vinayak-kackd-kaefe-tg");
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('n'));

const newString  = gameName.substring(0,4) // return chars from 0th index to 3rd index
console.log(newString);

const anotherString = gameName.slice(-9,5)
console.log(anotherString);

const newString1 = "       vinayak  " // trims the white spaces
console.log(newString1.trim());

const url = 'https://dsvsrgfeggsd%200/sff' 
console.log(url.replace('%200','---')); // replace %200 to --- 
console.log(url.includes('vina')) // checks if 'vina' is present or not
console.log(gameName.split('-')); // seperates string based on - 








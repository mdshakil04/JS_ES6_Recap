// console.log('JS file added')
// -----------------Arrow Function-----------------------------
const add = (a, b) => a + b;
const sum = add(5, 10);
// console.log(sum) 
const numbers1 = [1, 3, 5, 7, 9];
const numbers2 = [2, 4, 6, 8, 10]
const allNumbers = [...numbers1 , ...numbers2];
// console.log(allNumbers)
const orginalString = "Shakil";
const strSpreed = [...orginalString];
// console.log(strSpreed)

function doubleIt(a, b){
    return [a*2, b*2]
}
const [first, second] = doubleIt(3, 6);
console.log(first, second)
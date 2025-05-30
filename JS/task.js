const person = {
  name: "Sobuj",
  job: true,
  age: 35,
};
for (const key in person) {
  // console.log(key)
  const value = person[key];
//   console.log(value);
}
const book = {
    name: "Marhaba JS a maro thaba",
    author: "Jhankar Mahbub",
    price: 650
}
for(const key in book){
    // console.log(key)
    const value = book[key]
    // console.log(value)
}
const article = {
    name: "Marhaba JS a maro thaba",
    author: "Jhankar Mahbub",
    price: 650,
    category: "Programming"
}
// console.log(Object.keys(article).includes("author"))
// console.log(Object.values(article))
const number = {
    a : 10,
    b : 20,
    c: 30
}
const values = Object.values(number)
const sum = values.reduce((acc, curr) => acc + curr, 0)
console.log(sum)
// for(const key in number){
//     // console.log(key);
//     const value = number[key]
//     // console.log(value)
//     let sum = 0;

// }
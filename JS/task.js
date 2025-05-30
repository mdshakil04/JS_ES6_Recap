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
console.log(Object.keys(article).includes("author"))

// for(const key in article){
//     console.log(key.includes('author'))
// }
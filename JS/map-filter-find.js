const marks = [89, 93, 83, 76, 81, 72, 94, 79,86]
const cgpa = marks.map(mark => {
    // console.log(mark)
})
const products =[
    {id:1, name:"iPhone12", price: 156000},
    {id:2, name:"iPhone13", price: 176000},
    {id:3, name:"iPhone14", price: 56000},
    {id:4, name:"iPhone15", price: 66000}
]
const name = products.map(product => product.name);
const price = products.map(product => product.price);
// console.log(name, price)
const totalPrice = price.reduce((p , c) => p + c, 0);
// console.log(totalPrice)
const expensive = products.filter(product => product.price > 80000);
// console.log(expensive)
const affordable = products.find(product => product.price < 80000);
// console.log(affordable);

const friends = ['Shakil', 'Mizan', 'Sobuj', 'Shofiq',"Zahid"]
// const friend = friends.forEach(f => {
//     // console.log(f)
// })
// console.log(friend)
const oddFriends = friends.filter(f => f.length % 2 === 1)
console.log(oddFriends)
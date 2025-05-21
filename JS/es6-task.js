const friends = ["Ashik", "Sazzads", "Sanjida", "Tanveer", "Shakil", "Mizanur"];

const findSevenLetterNames = (friends) =>{
    return friends.filter(name => name.length === 7);
}
const result1 = findSevenLetterNames(friends);
// console.log(result1)
// -------------Rewrite this using For-of--------------------
const findFriends = (friends) =>{
    const newFriends = [];
    for(const friend of friends ){
        // console.log(friend)
        if(friend.length === 7){
            // console.log(friend)
            newFriends.push(friend)
        }
    }
    return newFriends
}
const result2 = findFriends(friends);
// console.log(result2)
// -----------------Using forEach----------------------------
const bigNameFriends = (friends) =>{
    const newList = [];
    friends.forEach((friend) =>{
        // console.log(friend)
        if(friend.length === 7){
            newList.push(friend)
        }
    })
    return newList
}
const result3 = bigNameFriends(friends);
console.log(result3)
// -------------------Problem 1--------------------------
function createGreeter(name){
    let personName = name;
    function innerFunction(){
        console.log(`Hello ${personName}`)
    }
    return innerFunction;
}
const greetShakil = createGreeter("Shakil")
greetShakil()
// -----------------Problem 2-----------------------------
function createLimitedCounter(limit){
    let count = 0;
    function counter(){
        if(count < limit){
            count ++
            console.log(count)
        }else{
            console.log("Limit reached")
        }
        // count++
        // console.log(count)
    }
    return counter
}

const counter = createLimitedCounter(3)
counter()
counter()
counter()
counter()
counter()

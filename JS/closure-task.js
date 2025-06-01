function createGreeter(name){
    let personName = name;
    function innerFunction(){
        console.log(`Hello ${personName}`)
    }
    return innerFunction;
}
const greetShakil = createGreeter("Shakil")
greetShakil()
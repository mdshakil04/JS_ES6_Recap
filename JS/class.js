// In JavaScript, a class is a blueprint for creating objects with shared properties and methods. It was introduced in ES6 (ECMAScript 2015) and provides a more structured and cleaner way to work with objects and inheritance compared to the older prototype-based approach.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`)
    }
}
const person1 = new Person("Shakil", 34);
const person2 = new Person("Zahid", 35)
console.log(person1, person2)
person1.greet();
person2.greet()
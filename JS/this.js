const car = {
  brand: "Tesla",
  getBrand: function() {
    console.log(this.brand);
  }
};

car.getBrand();
// ---------------------------------------------
function Person(name) {
  this.name = name;
  this.sayName = function () {
    console.log(this.name);
  };
}

const p1 = new Person("Shakil");
p1.sayName();
const p2 = new Person("Mehrima");
p2.sayName();
// ----------------------------------------------
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 44556,
  fullName : function(){
    return this.firstName + " " + this.lastName;
  },
  getFullname : function() {
    return this.fullName();
  }
};
console.log(person.getFullname());

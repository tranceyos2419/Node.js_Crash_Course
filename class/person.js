class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`Hi my name is ${this.name}, I am ${this.age}`);
  }
}

module.exports = Person;

class Person {
  constructor(name, age) {
    this.name = name; 
    this.age = age;   
  }

  greet() {
    return `${this.name} : Good morning!`; 
  }
}
const person = new Person("Avani", 21);
console.log(person.greet()); 

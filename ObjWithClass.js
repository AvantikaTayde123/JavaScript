class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, " + this.name);
  }
}

let person1 = new Person("Eve", 28);
let person2 = new Person("Frank", 32);

console.log(person1.name);  // Eve
person1.greet();  // Hello, Eve

console.log(person2.name);  // Frank
person2.greet();  // Hello, Frank

let person = new Object();
person.name = "Bob";
person.age = 30;
person.greet = function() {
  console.log("Hello, " + this.name);
};

console.log(person.name);  // Bob
person.greet();  // Hello, Bob

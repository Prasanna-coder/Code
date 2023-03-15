//A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword.
//The purpose of a constructor is to create a new object and set values for any existing object properties.
// constructor function
// creating a single object
function Person () { //This constructor function may be converted to a class declaration.
    this.name = 'Prasanna',
    this.age = 23
}

// create an object
const person = new Person();
console.log(person.name, person.age); // calling objectName and property name
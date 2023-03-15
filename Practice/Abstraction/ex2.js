function Person() {
    this.name = "Alexa";
    if (this.constructor === Person) {
     throw new Error("Your Error Message...");
    }
};
Person.prototype.info = function () {
    return "Person name is: " + this.name;
}
function Teacher(name) {
    this.name = name;
}
Teacher.prototype = Object.create(Person.prototype);
var teacher1 = new Teacher("Prasanna karanth");
console.log(teacher1.info());
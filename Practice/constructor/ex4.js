function User() {
    this.name = 'Bob';
}

let user1 = new User();
let user2 = new User();

//Adding property to constructor using prototype
User.prototype.age = 25;

console.log(user1.age); // 25
console.log(user2.age); // 25
function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};
User.prototype.setAge = function (newAge) {
  if (newAge < 0) {
    return false;
  }
  this.age = newAge;
  if (newAge >= 25) {
    this.requestNewPhoto();
  }
  return newAge;
};
// test

const user1 = new User("Jon", 17);
console.log(user1);
console.log(user1.prototype);
user1.setAge(23);
console.log(user1);
user1.setAge(29);
console.log(user1);
user1.sayHi();
user1.requestNewPhoto();
user1.setAge(-5);
console.log(user1);

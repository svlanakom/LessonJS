class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(value) {
    if (value < 0) {
      return false;
    }

    this.age = value;
    if (value >= 25) {
      this.requestNewPhoto();
    }
    return value;
  }

  static createEmpty() {
    return new User("", null);
  }
}

// test

const user1 = new User("John", 25);
console.log(user1);
user1.sayHi();
console.log(user1.setAge(6));
console.log(user1.setAge(22));

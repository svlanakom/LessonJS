// eslint-disable-next-line max-classes-per-file
class Sportsman {
  constructor(name) {
    this.name = name;
  }
  // eslint-disable-next-line lines-between-class-members
  run() {
    console.log(this);
    console.log(`${this.name} is runing`);
  }
}

class Swimmer extends Sportsman {
  constructor(name, swimStyle) {
    super(name);
    this.swimStyle = swimStyle;
  }

  swim() {
    console.log(`${this.name} is swimming ${this.style}`);
  }
}

// test data
//  const obj1 = new Object();
const obj1 = {
  name: "James",
};
const obj2 = new Sportsman("John");
console.log(obj2);

const obj3 = new Sportsman("Max");
console.log(obj3);

const swimObject = new Swimmer("Mike", "testStyle");
swimObject.run();
console.log(swimObject);

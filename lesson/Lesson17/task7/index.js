// const user = {
//   firstName: "",
//   lastName: "",
//   getFullName(firstName, lastName) {
//     return `${firstName} ${lastName}`;
//   },
//   setFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// user.getFullName.call(user, "John", "Doe");
// console.log(user.getFullName("John", "Doe"));

const user = {
  firstName: "",
  lastName: "",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullNameLine) {
    const nameArray = fullNameLine.split(" ");
    this.firstName = nameArray[0];
    this.lastName = nameArray[1];
  },
};

console.log(user.getFullName());
user.setFullName("John Dou");
console.log(user.getFullName());

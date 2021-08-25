let obj = {
  name: "John",
  age: 30,
};

// function getKeys(obj) {
//   const getKeyses = Object.keys(obj);
//   return getKeyses;
// }

// console.log(getKeys(obj[key]));

//

// function getKeys(obj) {
//   const getKeyses = Object.keys(obj);
//   return getKeyses;
// }

//

function getKeys(obj) {
  Object.keys(obj).map((el) => console.log(el));
}

console.log(getKeys(obj));

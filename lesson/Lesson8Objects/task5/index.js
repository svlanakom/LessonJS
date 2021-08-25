let obj = {
  name: "John",
  age: 30,
};

function getKeys(obj) {
  for (let key in obj) {
    console.log(key);
  }
}

console.log(getKeys(obj));

// function getKeys(obj) {
//   for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//       console.log(key);
//     }
//   }
// }
// console.log(getKeys(obj));

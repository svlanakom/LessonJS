// input string [], arr
// output obj

// algo
// reduce
// 1.

// algo
// 1.create res obj
// 2 iterate keysList
// 3 get value by index
// 4 add key - value to the object

// function buildObject(keysList, valuesList) {
//   const obj = {};
//   for (let index = 0; index < keysList.length; index += 1) {
//     obj[keysList[index]] = valuesList[index];
//   }
//   return obj;
// }

// const keys = ["name", "address", "age"];
// const values = ["Bob", "Ukraine", 34];

// const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }
// console.log(result);

function buildObject(keysList, valuesList) {
  const obj = {};
  for (let index = 0; index < keysList.length; index += 1) {
    const key = keysList[index];

    const value = valuesList[index];
    Object.assign(obj, { [key]: value });
  }
  return obj;
}

// const keys = ["name", "address", "age"];
// const values = ["Bob", "Ukraine", 34];

// const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }
// console.log(result);

// // bad option

function buildObject(keysList, valuesList) {
  let obj = {};
  for (let index = 0; index < keysList.length; index += 1) {
    obj = { ...obj, [keysList[index]]: valuesList[index] };
  }
  return obj;
}

// const keys = ["name", "address", "age"];
// const values = ["Bob", "Ukraine", 34];

// const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }
// console.log(result);

// good option
function buildObject(keysList, valuesList) {
  return keysList.reduce((obj, key, index) => {
    return { ...obj, [key]: valuesList[index] };
  }, {});
}

//  good 2
// const buildObject = (keysList, valuesList) =>
//   keysList.reduce(
//     (obj, key, index) => ({ ...obj, [key]: valuesList[index] }),
//     {}
//   );

// test
// const keys = ["name", "address", "age"];
// const values = ["Bob", "Ukraine", 34];

// const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }
// console.log(result);

// test
const keys = ["name", "address", "age"];
const values = [
  "Bob",
  "Ukraine",
  34,
  () => {
    console.log("run");
  },
];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }
console.log(result);

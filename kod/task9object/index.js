//input obj,string string
//output  obj

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// test

const transaction1 = {
  value: 170,
};
console.log(addPropertyV1(transaction1, "curently", "USD"));
console.log(transaction1);

// =====
//input obj,string string
//output  obj

function addPropertyV2(obj, key, value) {
  // Object.assign();
  //input target (object), source (object)... source N (obj)
  //output  obj
  return Object.assign(obj, { [key]: value });
}
// test

const transaction2 = {
  value: 170,
};

console.log(addPropertyV2(transaction, "curently", "USD"));
console.log(transaction2);

function addPropertyV3(obj, key, value) {
  // Object.assign();
  //input target (object), source (object)... source N (obj)
  //output  obj
  return Object.assign(obj, { [key]: value });
}

// =============

function addPropertyV3(obj, key, value) {
  //    const copyObj = {}
  return Object.assign({}, obj, { [key]: value });
}

// function addPropertyV3(obj, key, value) {
//   // put your code here
//   const newObj = {};
//   Object.assign(newObj, obj, { [key]: value });
//   return newObj;
// }
// test

const transaction3 = {
  value: 170,
};

console.log(addPropertyV3(transaction3, "currency", "USD"));
console.log(addPropertyV3(transaction3, "country", "Ukraine"));
console.log(transaction3);

//

function addPropertyV4(obj, key, value) {
  const newObj = { ...obj, [key]: value };
  return newObj;
}

// function addPropertyV4(obj, key, value) {
//   return { ...obj, [key]: value };
// }

// test
// const transaction3 = {
//   value: 170,
// };

// console.log(addPropertyV3(transaction3, "currency", "USD"));
// console.log(addPropertyV3(transaction3, "country", "Ukraine"));
// console.log(transaction3);

// test
const transaction4 = {
  value: 170,
  checout: () => {
    console.log("hello");
  },
};

console.log(addPropertyV4(transaction4, "currency", "USD"));
console.log(addPropertyV4(transaction4, "country", "Ukraine"));
transaction4.city = "Kyiv";
console.log(transaction4);

// spread operator
const numbers = [10, 11, 18, 7, 0];
console.log(numbers);
console.log(...numbers);
const numbersCopy = [...numbers, 111, 45, 44];
console.log(numbersCopy);

const transactionTest = {
  value: 170,
};

const transactionTestCopy = { ...transactionTest };
console.log(transactionTestCopy);

// rest operator

function sum(param1, ...params) {
  console.log(params1);
  console.log(params);
  return params.reduce((acc, el) => {
    acc += el;
    return acc;
  });
}
// test

console.log(sum(1, 2, 55, 9, 0));

// data descructing with rest
const numbersRest = [10, 12, 45, 5];
const [el, ...rest] = numbersRest;

console.log(el);
console.log(rest);

const restArrCopy = [...restArr]; // spread

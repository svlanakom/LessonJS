// input  obj, obj
// output boolean

// algo(составить список ключей объектов и сравнить их значения)

// возвращает массив со всеми свойствами (независимо от того, перечисляемые они или нет),
// 1 get arrays with property from too obj
// 2 compare the length of the arrays
// 3 iteration array
// 4 compare by index value
//

function compareObjects(obj1, obj2) {
  const props1 = Object.getOwnPropertyNames(obj1);
  const props2 = Object.getOwnPropertyNames(obj2);

  if (props1.length !== props2.length) {
    return false;
  }

  for (let i = 0; i < props1.length; i += 1) {
    const prop = props1[i];

    if (obj1[prop] !== obj2[prop]) {
      return false;
    }
  }

  return true;
}

// examples;
const obj1 = {
  name: "Tom",
  age: 17,
};

const obj2 = {
  name: "Bob",
  age: 17,
};

const obj3 = {
  name: "Bob",
  age: 17,
  student: false,
};

const obj4 = {
  name: "Tom",
  age: 17,
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true

// ===============
// / input-obj,obj
// output- boolean
// 1. compare if  number keys in obj1 !== number keys in obj2=>false
//2. collect keys to arr
// 3 iterate  in obj1  and compare keys:values obj1 with keys:values obj1
// 3.1 if (obj1[key] !== obj2[key]) return false

function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let index = 0; index < keys1.length; index += 1) {
    const key = keys1[index];
    // const key2 = keys2[index];

    const value1 = obj1[key];
    const value2 = obj2[key];
    if (value1 !== value2) {
      return false;
    }
  }
  return true;
}

const obj1 = {
  name: "Tom",
  age: 17,
};

const obj2 = {
  name: "Bob",
  age: 17,
};

const obj3 = {
  name: "Bob",
  age: 17,
  student: false,
};

const obj4 = {
  name: "Tom",
  age: 17,
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true

// refactoring

function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  return !keys1.some((key) => obj1[key] !== obj2[key]);
}

// bad option
// function compareObjects(obj1, obj2) {
//   const entries1 = Object.entries(obj1).sort();
//   const entries2 = Object.entries(obj2).sort();

//   if (entries1.length !== entries2.length) {
//     return false;
//   }
//   entries1.reduce(acc, [key, value], index) => {
//     if (key !== entries[index[0] && value !== entries2[index[1]])
// return false)
//   }
// }

///// entries
// Object.entries();

// input - obj;
// output - array;

//  object.entries();

const obj = {
  age: 17,
  name: "Tom",
  city: "Kyiv",
};

console.log(Object.entries(obj));

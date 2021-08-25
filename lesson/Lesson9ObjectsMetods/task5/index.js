const obj1 = {
  name: "Tom",
  age: 17,
};

const obj2 = {
  name: "Bob",
  student: false,
};

function mergeObjectsV1(obj1, obj2) {
  return Object.assign(obj1, obj2);
}
console.log(mergeObjectsV1(obj1, obj2));

function mergeObjectsV2(obj1, obj2) {
  return Object.assign(obj2, obj1);
}

function mergeObjectsV3(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

function mergeObjectsV4(obj1, obj2) {
  return { ...obj2, ...obj1 };
}

// mergeObjectsV1(obj1, obj2); // ==> { name: 'Bob', age: 17, student: false }
// mergeObjectsV2(obj1, obj2); // ==> { name: 'Tom', age: 17, student: false }
// mergeObjectsV3(obj1, obj2); // ==> { name: 'Bob', age: 17, student: false }
// mergeObjectsV4(obj1, obj2); // ==> { name: 'Tom', age: 17, student: false }

// function addPropertyV1(userData, userId) {
//   userData.id = userId;
//   console.log(userData);
//   return userData;
// }
// console.log(addPropertyV1(userData, "1234567"));

// addPropertyV1(user, "1234567"); // ==> { name: 'Sam', id: '1234567' }

// put your code here

// put your code here

// put your code here

// examples
// const user = {
//   name: "Sam",
// };
// addPropertyV1(user, "1234567"); // ==> { name: 'Sam', id: '1234567' }

const user = {
  name: "Sam",
};

function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}

console.log(addPropertyV1(user, "1234567")); // ==> { name: 'Sam', id: '1234567' }

const user2 = {
  name: "Sam",
};

function addPropertyV2(userData, userId) {
  return Object.assign(userData, { id: userId });
}
console.log(addPropertyV2(user, "1234567"));

const user3 = {
  name: "Sam",
};

function addPropertyV3(userData, userId) {
  const resultObj = Object.assign({}, userData);
  resultObj.id = userId;
  return resultObj;
}

console.log(addPropertyV3(user, "1234567"));

const user4 = {
  name: "Sam",
};

function addPropertyV4(userData, userId) {
  return { ...userData, id: userId };
}
console.log(addPropertyV4(user, "1234567"));

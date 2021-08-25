// function getAdults(obj) {
//   const resultArr = [];
//   const objKeys = Object.keys(obj);
//   const objValues = Object.values(obj);
//   objValues.map((item, index) => {
//     if (item >= 18) {
//       resultArr.push(objKeys[index]);
//     }
//   });
//   console.log(resultArr);
//   return resultArr;
// }

// getAdults({ John: 19, Tom: 17, Bob: 18 });

const getAdults = (userObj) => {
  const result = Object.entries(userObj)
    .filter((user) => user[1] >= 18)
    .map((user) => user[0]);

  return result;
};
console.log(getAdults({ John: 19, Tom: 17, Bob: 18 }));

const getAdults = (userObj) => {
  return Object.entries(userObj)
    .filter((user) => user[1] >= 18)
    .map((user) => user[0]);
};
console.log(getAdults({ John: 19, Tom: 17, Bob: 18 }));

const getAdults = (userObj) =>
  Object.entries(userObj)
    .filter((user) => user[1] >= 18)
    .map((user) => user[0]);
console.log(getAdults({ John: 19, Tom: 17, Bob: 18 }));

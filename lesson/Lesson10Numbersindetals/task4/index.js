function getMaxAbsoluteNumber(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  if (array.length === 0) {
    return null;
  }

  const positiveArray = array.map((el) => Math.abs(el));

  return Math.max(...positiveArray);
}

getMaxAbsoluteNumber(3);
console.log(getMaxAbsoluteNumber([3, -656, 1, 33, -90]));

// function getMaxAbsoluteNumber = arr => {
//   let max = - Infinity;

//   arr.forEach(num => {
//     if (Math.abs(num) > max) {
//       max = Math.abs(num);
//     }
//   });
//   return max;
// }

const getMaxAbspluteNumber = (arr) => {
  const absoluteValues = arr.map((num) => Math.abs(num));
  const max = Math.max(...absoluteValues);
  return max;
};

const arrAverage = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const arithmeticMean = arr.reduce((acc, num) => {
    acc += num;
    return acc;
  });
  return arithmeticMean / arr.length;
};

const arr = [2, 5, 6, 3];
console.log(arrAverage(arr));

// const arrAverage = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return arr.reduce((acc, num) => acc + num) / arr.length;
// };

// const arr = [2, 5, 6, 3];
// console.log(arrAverage(arr));

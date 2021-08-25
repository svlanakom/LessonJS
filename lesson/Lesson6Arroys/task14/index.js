// function getSubArray(arr, n) {
//   const newArr = [];
//   for (let i = 0; i < n; i += 1) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }
// console.log(getSubArray([11, 4, 8, 3], 2)); // 11. 4

const getSubArray = (arr, numberOfElements) => {
  const newArr = [];
  for (let i = 0; i < numberOfElements; i += 1) {
    newArr.push(arr[i]);
  }
  return newArr;
};
console.log(getSubArray([11, 4, 8, 3], 2));

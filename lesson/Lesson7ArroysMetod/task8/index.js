// function cloneArr(arr) {
//   return !Array.isArray(arr) ? null : arr.slice();
// }

// eslint-disable-next-line consistent-return
//put your code here

function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice();
}
console.log(cloneArr([3, 5, 4, 35]));

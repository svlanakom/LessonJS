//  algo
// 1. create empty array
// 2. iterate arr
// 3. apply callback for every el
// 4. push el to the res if callback true

// input array func
// output array

// callback
// input element index array
// output boolean

// Option1

// const filterArrayElements = (arr, callback) => {
//   const res = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     const callbackRes = callback(arr[index], index, arr);
//     if (callbackRes) {
//       res.push(arr[index]);
//     }
//   }
//   return res;
// };

// test 1

// const array = [10, 5, 4, 6, 9];
// const func = (el, index, arr) => {
//   console.log(`el: ${el}, index: ${index}, arr: ${arr}`);
//   if (el > 7) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(filterArrayElements(array, func));

// Option 2

const filterArrayElements = (arr, callback) => {
  const res = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (callback(arr[index], index, arr)) {
      res.push(arr[index]);
    }
  }
  return res;
};

const array = [10, 5, 4, 6, 9];
const func = (el, index, arr) => {
  //   console.log(`el: ${el}, index: ${index}, arr: ${arr}`);
  if (el > 7) {
    return true;
  } else {
    return false;
  }
};

console.log(filterArrayElements(array, func));

// test2
// const callbackFunc = el => el > 4;
// console.log(callbackFunc([2, 5, 2], callbackFunc));

// test3

// const testArr = [10, 5, 4, 56, 45, 54, 4];
// const func = (el, index, arr) => {
//   if (arr.length < 5) {
//     return true;
//   }
//   return el > 7;
// };

// console.log(filterArrayElements(testArr, func));

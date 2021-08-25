// const sum = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return arr.reduce((acc, num) => acc + num);
// };

// const arr = [2, 5, 6, 3, 0, 3, -1];
// console.log(sum(arr));

// сonst sum = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//     }
//     return
//     arr.reduce((acc, element) => {
//     acc += element);

// };

// const arr = [2, 5, 6, 3, 0, 3, -1];
// console.log(sum(arr));

const sum = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const sum = arr.reduce((acc, el) => {
    acc += el;
    return acc;
  });
  return sum;
};

const arr = [2, 5, 6, 3, 0, 3, -1];
console.log(sum(arr));

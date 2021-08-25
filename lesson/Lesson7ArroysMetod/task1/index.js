// function getSpecialNumbers(array) {
//   let newArray = array.filter(function (m) {
//     if (m % 3 === 0) {
//       return m;
//     }
//   });

//   return newArray;
// }
// console.log(getSpecialNumbers([1, 2, 3, 4, 5, 1, 2]));

function getSpecialNumbers(array) {
  let newArr = array.filter((params) => {
    if (params % 3 === 0) {
      return params;
    }
  });
  return newArr;
}
console.log(getSpecialNumbers([1, 2, 3, 4, 5, 1, 2]));

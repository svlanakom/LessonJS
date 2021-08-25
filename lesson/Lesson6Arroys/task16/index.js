// function removeDuplicates(array) {
//   if (!Array.isArray(array)) {
//     return null;
//   }
//   for (let i = 0; i <= array.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (array[i] === array[j]) {
//         array.splice(j, 1);
//       }
//     }
//   }
//   return array;
// }
// console.log(removeDuplicates([1, 1, 2, 4, 4]));

function removeDuplicates(array) {
  return Array.from(new Set(array));
}
console.log(removeDuplicates([1, 1, 2, 4, 4]));

// let uniq = (a) => [...new Set(a)];

// var result = [];
// a.forEach(function (item) {
//   if (result.indexOf(item) < 0) {
//     result.push(item);
//   }
// });
//put your code here

// function removeDuplicates(originalArray, prop) {
//   let newArray = [];
//   let lookupObject = {};

//   for (let i in originalArray) {
//     lookupObject[originalArray[i][prop]] = originalArray[i];
//   }

//   for (i in lookupObject) {
//     newArray.push(lookupObject[i]);
//   }
//   return newArray;
// }

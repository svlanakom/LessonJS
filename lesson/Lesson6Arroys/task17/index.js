// function uniqueCount(array) {
//   if (!Array.isArray(array)) {
//     return null;
//   }
//   let newArr = [];
//   array.forEach((element) => {
//     if (!newArr.includes(element)) {
//       newArr.push(element);
//     }
//   });
//   return newArr.length;
// }

function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let newArr = [];

  for (let el of array) {
    if (!newArr.includes(el)) {
      newArr.push(el);
    }
  }
  return newArr.length;
}

console.log(uniqueCount([1, 4, 3, 4, 5, 9, 3, 6]));

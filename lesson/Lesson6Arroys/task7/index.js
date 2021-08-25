function checkSum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let sum = 0;

  for (const el of arr) {
    sum += el;
  }
  return sum > 100;
}

console.log(checkSum([5, 95, 2]));

//   arr.forEach((element) => {
//     sum += element;
//   });
//   return sum > 100;
// }

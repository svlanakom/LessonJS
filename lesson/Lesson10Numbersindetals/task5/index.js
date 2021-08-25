const getTotalPrice = (arr) => {
  const sum = arr.reduce((acc, el) => {
    acc += el;
    return acc;
  });
  const sumDollar = Math.floor(sum * 100) / 100;
  return `$${sumDollar}`;
};

console.log(getTotalPrice([2, 4.7, 8, 5.358]));

// function getTotalPrice(array) {
//   let result = 0;
//   array.forEach((element) => {
//     console.log(Math.floor(element * 100));
//     result += Math.floor(element * 100);
//   });
//   return `$${result / 100}`;
// }

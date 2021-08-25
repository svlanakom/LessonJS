// /
// function swap(numbers) {
//   const [start, ...rest] = numbers;
//   return [...rest, start];
// }

// function swapManual(numbers) {
//   let resultArr = numbers.slice();

//   resultArr.push(resultArr[0]);
//   resultArr.splice(0, 1);
//   return resultArr;
// }
// console.log(swapManual([1, 10, 9, 11]));

// examples
// swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
// swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]

// const a = [5, 1, 2, 3, 4];
// a.push(a.shift());
// console.log(a);

function swapManual(numbers) {
  numbers.push(numbers.shift());
  return numbers;
}
console.log(swapManual([1, 10, 9, 11]));

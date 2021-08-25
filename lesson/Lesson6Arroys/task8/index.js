const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  //   let resultArr = [];
  //   arr.forEach((item) => {
  //     if (item % 2 === 0) {
  //       item += delta;
  //     }
  //     resultArr.push(item);
  //   });
  //     return resultArr;
  let result = [];
  for (let el of arr) {
    if (el % 2 === 0) {
      el += delta;
    }
    result.push(el);
  }
  return result;
};
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));
// examples
// increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20); // ===> [22, 5, 26, 28, 11, 9, 24]
// increaseEvenEl([7, 11, 1], 10); // ===> [7, 11, 1]
// increaseEvenEl([], 120); // ===> []

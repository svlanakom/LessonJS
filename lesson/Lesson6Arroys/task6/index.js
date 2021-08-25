function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let ret = [];

  for (let i = 0; i <= arr.length - 1; i += 1) {
    ret.push(arr[i] * arr[i]);
  }

  return ret;
}

console.log(squareArray([1, 10, 9, 11]));

squareArray([1, 10, 9, 11]); // ==> [1, 100, 81, 121]

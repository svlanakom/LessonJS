function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map((m) => m * m);
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(squareArray(arr));

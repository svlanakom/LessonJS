function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map((m) => (m % 2 === 0 ? m + delta : m));
}

console.log(increaseEvenEl([1, 2, 3, 4, 5], 2));

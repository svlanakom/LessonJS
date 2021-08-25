function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const newArr = arr.slice();
  return newArr.reverse();
}

console.log(reverseArray([2, 6, 5, 9]));

function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let newArr = arr.slice();
  return newArr.reverse();
}

console.log(reverseArray([5, 6, 8, 9]));

export default function getMin(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const resArr = arr.map((num) => num * num);

  return Math.min(...resArr);
}

// console.log(getMin([2, 4, -6]));

// console.log(getMin([]));

// console.log(getMin("fh"));

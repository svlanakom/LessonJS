function checker(arr) {
  if (!Array.isArray) {
    return null;
  }
  //   console.log(Math.max.apply(null, arr));
  return Math.max.apply(null, arr) + Math.min.apply(null, arr) > 1000;
}
console.log(checker([104, 0, 1140]));

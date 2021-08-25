const flatArray = (arr) => {
  const resArr = arr.flat();

  return resArr.sort((a, b) => a - b);
};

console.log(flatArray([3, 5, 3, 67, 4, [4, 2]]));

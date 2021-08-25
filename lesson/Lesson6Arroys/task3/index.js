function getSpecialNumbers(from, to) {
  const arr = [];
  for (let index = from; index <= to; index += 1) {
    if (index % 3 === 0) {
      arr.push(index);
    }
  }
  return arr;
}

getSpecialNumbers(1, 10);

console.log(getSpecialNumbers(1, 10));

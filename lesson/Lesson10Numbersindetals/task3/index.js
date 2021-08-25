function multiRound(number) {
  const resultArray = [];

  resultArray.push(Math.floor(number * 100) / 100);
  resultArray.push(Math.round(number * 100) / 100);
  resultArray.push(Math.ceil(number * 100) / 100);
  resultArray.push(Math.trunc(number * 100) / 100);
  resultArray.push(Number(number.toFixed(2)));
  return resultArray;
}

console.log(multiRound(3.157));
console.log(multiRound(-3.157));
console.log(multiRound(+3.157));

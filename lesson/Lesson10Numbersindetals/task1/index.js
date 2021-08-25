function getFiniteNumbers(array) {
  return array.filter((item) => Number.isFinite(item));
}

function getFiniteNumbersV2(array) {
  return array.filter((item) => isFinite(item));
}

function getNaN(array) {
  return array.filter((item) => Number.isNaN(item));
}
function getNaNV2(array) {
  return array.filter((item) => isNaN(item));
}
function getIntegers(array) {
  return array.filter((item) => Number.isInteger(item));
}

console.log(getFiniteNumbers([1, 2, "hhh", Infinity, "1b2", NaN, 215]));
console.log(getFiniteNumbersV2([1, 2, "hhh", Infinity, "1b2", NaN, 215]));

console.log(getNaN([1, 2, "hhh", Infinity, "1b2", NaN, 215]));
console.log(getNaNV2([1, 2, "hhh", Infinity, "1b2", NaN, 215]));
console.log(getIntegers([1, 2, "hhh", Infinity, "1b2", NaN, 215]));

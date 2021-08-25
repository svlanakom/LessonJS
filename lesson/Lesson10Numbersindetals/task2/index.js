function getParsedIntegers(array) {
  return array.map((el) => Number.parseInt(el, 10));
}
function getParsedIntegersV2(array) {
  return array.map((el) => parseInt(el, 10));
}
function getParsedFloats(array) {
  return array.map((el) => Number.parseFloat(el));
}
function getParsedFloatsV2(array) {
  return array.map((el) => parseFloat(el));
}

console.log(getParsedIntegers([1.33, 1.56, 0.25, "text"]));

console.log(getParsedIntegersV2([1.33, 1.56, 0.25, "text"]));
console.log(getParsedFloats([1.33, 1.56, 0.25, "text"]));
console.log(getParsedFloats([1.33, 1.56, 0.25, "text"]));

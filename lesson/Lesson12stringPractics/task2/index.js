// var word = 'Kutiashka';
// console.log( word.split('').reverse().join('') ); // akhsaituK

function reverseString(string) {
  if (typeof string !== "string") {
    return null;
  }
  return string.split("").reverse().join("");
}
console.log(reverseString("teacher"));

// function reverse(s) {
//   return s.split("").reverse().join("");
// }

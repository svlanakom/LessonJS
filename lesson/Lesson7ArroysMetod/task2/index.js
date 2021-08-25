// function sortDesk(array) {
//     array.sort((firstEl, secEl) =>
//       firstEl - secEl;
//   );
// }

// console.log(sortDesk([13, 4, 45, 7]))
// const array = [13, 4, 45, 7];

// function sortDesc(array) {
//   let resultArray = array.slice();
//   return resultArray
//     .sort(function (a, b) {
//       return a - b;
//     })
//     .reverse();
// }
function sortDesc(array) {
  return array
    .slice()
    .sort(function (a, b) {
      return a - b;
    })
    .reverse();
}

console.log(sortDesc([1, 25, 64, 3]));

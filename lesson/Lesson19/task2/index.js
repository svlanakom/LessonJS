// function getOwnProps(obj) {
//   const resultArray = [];
//   for (let prop in obj) {
//     if (obj.hasOwnProperty(prop) & (typeof obj[prop] !== "function")) {
//       resultArray.push(prop);
//     }
//   }
//   return resultArray;
// }

function getOwnProps(obj) {
  const newArr = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== "function") {
      newArr.push(prop);
    }
  }
  return newArr;
}

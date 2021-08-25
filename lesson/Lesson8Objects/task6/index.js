// const pickProps = (obj, props) => {
//   let newtObj = {};
//   for (const key in obj) {
//     const el = obj[key];
//     if (props === key) {
//       newtObj[key] = el;
//     }
//   }
//   return newtObj;
// };

// console.log(pickProps({ a: 1, b: 2, c: 3 }, ["a", "c"]));

// pickProps({ a: 1, b: 2, c: 3 }, ["a", "c"]); // ==> { a: 1, c: 3 }
// pickProps({ a: 1, b: 2, c: 3 }, ["a", "c", "d", "hex"]); // ==> { a: 1, c: 3 }

const pickProps = (obj, props) => {
  const newObj = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    props.map((el) => {
      if (el === key) {
        newObj[key] = obj[key];
      }
    });
  }

  return newObj;
};
console.log(pickProps({ a: 1, b: 2, c: 3 }, ["a", "c"]));
console.log(pickProps({ a: 1, b: 2, c: 3 }, ["a", "c", "d", "hex"]));

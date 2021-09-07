// var foo = 1;

// function bar() {
//   if (!foo) {
//     var foo = 10;
//   }

//   return foo;
// }

// var foo = bar();

var foo = 1;

function bar() {
  if (!foo) {
    let foo = 10;
  }

  return foo;
}

export default foo = bar();
console.log(foo);

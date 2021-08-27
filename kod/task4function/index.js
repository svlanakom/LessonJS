// 1. Learn requirement
// 2. Create step by step algo(& input / output for functions
// 3. Write draft solution & testing
// 4. Refactorong & final testing

// algo
// 1 iterate from 2 to Number
// 2 chek every number ifprince
// 2.1 iterate from from 2 to Number
// 2.2 chek if num % index === 0 not PromiseRejectionEvent

// input: num
// output: underfined

// function getPrimes(num) {
//   for (let index = 2; index <= num; index += 1) {
//     console.log("cheking if " + index + " is prime");
//     let isPrime = true;
//     for (let number = 2; number < index; number += 1) {
//       console.log("checking if number % index" + number + " " + index);
//       if (index % number === 0) {
//         console.log("number is not prime: " + index);
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(index);
//     }
//   }
// }
// test data
// getPrimes(10);

// input number
// output boolean

function isPrime(number) {
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(num) {
  for (let index = 2; index <= num; index += 1) {
    if (isPrime(index)) {
      console.log(index);
    }
  }
}
getPrimes(15);

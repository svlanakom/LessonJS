const numbersList1 = [1, 2, 3, 4, 5];

console.log(numbersList1);
// input  none
// output numbers
// const res = numbersList1.pop();
// console.log(res);

numbersList1.pop();
console.log(numbersList1);
// ======

// input  number
// output array length




const numbersList2 = [1, 2];
console.log("befor push ", numbersList2);

const res = numbersList2.push(100);
console.log(res);

console.log("after push ", numbersList2);

====

// input  none
// output number
const numbersList3 = [1, 2, 3, 4, 5];
console.log("before  shift", numbersList3 )
const res3 = numbersList3.shift(50);
console.log(res)


console.log('after shift', numbersList3)

// input  number
// output array length
// ( для unshift)


// ====
// input  num, num(optional)
//  output array
const numbersList4 = [1, 2, 3, 4, 5];

const res4 = numbersList4.slice(2)
console.log(res4);

console.log("after slice ", numbersList4);

// ===== CALLBACK

// input number number callback
// output underfined
function sum(from, to, printer) {
    let sum = 0;
    for (let index = from; index <= to, index += 1)
        sum += index;
}
 printer(sum);

}
//  test data
// functionprintResult(res)
// alert (res)
    
    
function printResult(res) {
    // alert(res);
     console.log(res)
}
// functionprintResult(res)
// send email

sum(5, 8, printResult)
 

//====== filter
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];
console.log("before filter ", anotherNumbersList)

// input callback
// output array


// callback
// input num
// output boolean
// function filterCallback(element) {
    
//     if (element > 5) {
//         return true;
//     } else {
//         return false;
//     }
// } 

const filterRes = anotherNumbersList.filter(el => el > 5);


console.log(filterRes);

console.log("after filter ", anotherNumbersList)

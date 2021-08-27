//  algoritm
// 1. create empty array
// 2. iterate arr
// 3. apply callback for every el
// 4. push el from array in new array
//

// input array callbackfunc
// output array

// callback
// input number
// output number

const mapArrayElements = (arr, callback) => {
  const res = [];
  for (let index = 0; index < arr.length; index += 1) {
    res.push(callback(arr[index], index, arr));
  }
  return res;
};

const callback = (num) => num * num;
console.log(mapArrayElements([2, 5, 1, 6, 3], callback));

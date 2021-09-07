// input  obj
// output array

// input: object
// output: array

// algo 1 option
// 1. необходимо преобразовать многомерный объект в массив объектов
// 2. в массиве объектов - объект 'customer-id-1' преобразовать в  значение ключа id:
// (Пример: 'customer-id-1'{} => {id: 'customer-id-1'})
// 3. отсортировать в объекте значение ключа 'age' по возрастанию

// algo 2 option
// algo
// create function (I: obj,  O: array)
// get key & value
// add to object key(id) and value(its index this obj) .map
// push objs in array
// sort by age

const getCustomersList = (obj) => {
  // for map
  // input callback
  // output array

  // for callback function
  // input array
  // output object

  Object.entries(obj)
    .map((arr) => {
      console.log(arr);

      // eslint-disable-next-line no-shadow
      let obj = { id: arr[0] };

      console.log(obj);

      const value = arr[1];
      console.log(value);
      obj = { ...obj, ...value };

      console.log(obj);

      return obj;
    })
    .sort((a, b) => a.age - b.age);
};


// refactoring good
// const getCustomersList = (obj) => {
//   return Object.entries(obj)
//     .map((arr) => ({ id: arr[0], ...arr[1] }))
//     .sort((a, b) => a.age - b.age);
// };

// // best option
// const getCustomersList = (obj) =>
//     Object.entries(obj)
//         .map(([id, customerObj]) => ({ id: id, ...customerObj }));
//         .sort((a, b) => a.age - b.age);

// test
const customer = {
  "customers-id-1": {
    name: "William",
    age: 54,
  },
  "customers-id-2": {
    name: "Tom",
    age: 17,
  },
};
console.log(getCustomersList(customer));

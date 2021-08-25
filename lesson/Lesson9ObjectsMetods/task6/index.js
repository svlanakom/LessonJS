const rooms = {
  room1: [
    { name: "Jack" },
    { name: "Andrey" },
    { name: "Ann" },
    { name: "Vasyl" },
  ],
  room2: [{ name: "Dan" }],
  room3: [{ name: "Denis" }, { name: "Max" }, { name: "Alex" }],
};

const getPeople = (obj) => {
  return Object.values(obj)
    .flat(1)
    .map((el) => el.name);
};

console.log(getPeople(rooms));
getPeople(rooms);

// OPTION2

const getPeople = (obj) => {
  // put your code here
  const rooms = Object.keys(obj);
  let resultArr = [];

  //   console.log(rooms); re we geetin array of rooms

  rooms.forEach((item, index) => {
    console.log(obj[item]); // here we getting array of objects with name:value;

    let roomItem = obj[item];
    roomItem.map((element) => {
      console.log(element); // here we getting object with name:value;
      resultArr.push(element.name); // push name only to array
      return resultArr;
    });
  });
  console.log(resultArr);
  return resultArr;
};

getPeople(rooms);

"use strict";

// bind(func, context, [arg1], [arg2]);
//

function printMessage(country, city) {
  console.log(this);

  console.log(
    `Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`
  );
}

const user = {
  firstName: "Andrey",
  age: 111,
  tempFunc: "some secret data",
};

console.dir(printMessage);
console.log(user);

// Принимает контекст, возвращает  привязанный вариант функции
printMessage.bind();

// printMwssage("Ukraine", "Lviv");
// input сontext, arg1 ... arg N optional
// output функция

// option1
// const printMassageBinded = printMessage.bind(user);
// printMassageBinded("Ukraine", "Lviv");

printMessage.bind(user)("Ukraine", "Lviv");

// option2
const printMassageBinded2 = printMessage.bind(user, "UK", "London");
printMassageBinded2("France", "Paris");

// option3
const printMassageBinded3 = printMessage.bind(user, "Poland");
printMassageBinded2("Warsaw");

// ==================

// in: func,context,args1 argN
// out: bindedfunc
function myBind(func, context, ...args) {
  // call
  // input context, arg 1... argN
  // output func result

  // input  the same as func arg(принимает те же аргументы)
  // output func result
  return function (...funcArgs) {
    func.call(context, ...args, ...funcArgs);
  };
}

// test data

const bindedfunc = myBind(printMessage, user);
bindedfunc("UK", "London");

const bindedfunc2 = myBind(printMessage, user, "Poland");
bindedfunc2("Warsaw");

// // "use strict";

// const timer = {
//   secondPassed: 0,
//   minsPassed: 0,
//   timerId: null,

//   startTimer() {
//     console.log(this);
//     // lose context case #2
//     // [1, 2, 4].filter(function () {
//     //   console.log("filter this " + this);
//     // });

//     this.timerId = setInterval(() => {
//       console.log(this);

//       this.secondPassed += 1;
//       if (this.secondPassed === 60) {
//         this.minsPassed += 1;
//         this.secondPassed = 0;
//       }
//     }, 1000);

//     //   fix context with bind
//     // const callbackFunc = function () {
//     //   console.log(this);
//     //   this.secondPassed += 1;
//     // };
//     // const bindCallbackFunc = callbackFunc.bind(this);
//     // setInterval(bindCallbackFunc, 1000);

//     //      function filter (callback) {
//     //       ...
//     //       ...
//     //      callback()
//     //     ...
//     //   }

//     //      function setInterval (callback) {
//     //       ...
//     //       ...
//     //      window.callback()
//     //      ..
//     //   }
//   },

//   getTime() {
//     let secondsToShow = this.secondsPassed;
//     if (this.secondsPassed < 10) {
//       secondsToShow = "0" + this.secondsPassed;
//     }
//     console.log(`${this.minsPassed}:${secondsToShow}`);
//     return `${this.minsPassed}:${secondsToShow}`;
//   },

//   resetTimer() {
//     this.secondsPassed = 0;
//     this.minsPassed = 0;
//   },
// };
// // context
// // 1. know when context is lost (2-3 cases)
// // 2. fix context
// //  с помощью контекста мы можем использовать результат первой функции в других функциях
// // механизм расшарить даааные между функциями и разные функции имеют к этому доступ
// // помогает изолировать данные. можно четко обозначить список обекта . мы показывает ктл может с даными работать а кто не может.
// // контекст это один из источников данных откуда функция может черпать информацию

// //
// // test;
// timer.startTimer();

// // lose context вызов функции вне обэкта.

// // const startTimerFunc = timer.startTimer;
// // startTimerFunc();

// // set interval exampl

// // setInterval(() => {
// //   console.log("Monday");
// // }, 2000);

// // lose context case 2

// // lose context case #2
// // [1, 2, 4].filter(function () {
// //   console.log("filter this " + this);
// // });

//

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  timerId: null,

  startTimer() {
    this.timerId = setInterval(() => {
      console.log(`${this.minsPassed}:${this.secondsPassed}`);
      this.secondsPassed += 1;

      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },

  stopTimer() {
    clearInterval(this.timerId);
  },

  getTime() {
    let secondsToShow = this.secondsPassed;
    if (this.secondsPassed < 10) {
      secondsToShow = "0" + this.secondsPassed;
    }
    console.log(`${this.minsPassed}:${secondsToShow}`);
    return `${this.minsPassed}:${secondsToShow}`;
  },

  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};
timer.startTimer();

// context это обьект в рамках которого выполняется функция
// один из источников данных из которых функция может черпать данные

// 1. понимтаь когда контекст теряется (2-3 случая всего лишь)
// 1.1 если перед вызовом функции нет обьекта например startTimerFunc = timer.startTimer; тут при вызове startTimerFunc произойдет потеря контекста
// 1.2
// 1.3

// 2. fix context

//

// test data

// не потеря контекста

// const startTimerFunc = timer.startTimer;
// startTImerFunc();
// потеря контекста ↑

// set interval examples
// setInterval(() => {
//   console.log("Monday");
// }, 2000);

// const obj = {
//   testNum: 5,
//   testFunc: () => {
//     console.log(this);
//   },
// };

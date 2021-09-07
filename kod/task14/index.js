// input none
// output obj

// метод все что внутри обэекта или класса

// const createLogger = () => {
//   const memory = [];

//   function warn(text) {
//     const warnObj = {
//       message: text,
//       dateTime: new Date(),
//       type: "warn",
//     };
//     memory.push(warnObj);
//   }
//   function error(text) {
//     const errorObj = {
//       message: text,
//       dateTime: new Date(),
//       type: "error",
//     };
//     memory.push(errorObj);
//   }
//   function log(text) {
//     const logObj = {
//       message: text,
//       dateTime: new Date(),
//       type: "log",
//     };
//     memory.push(logObj);
//   }
//   function getRecords(type = "none") {
//     if (type !== "none") {
//       const getmemory = memory.filter((element) => {
//         if (element.type === type) {
//           return element;
//         }
//       });
//       return getmemory.sort((a, b) => b.dateTime - a.dateTime);
//     }
//     return memory.sort((a, b) => b.dateTime - a.dateTime);
//   }
//   return {
//     warn,
//     error,
//     log,
//     getRecords,
//   };
// };




// refactoring
const createLogger = () => {
  const memory = [];

    function warn(text) {
      pusher(text, 'warn')
    
  }
function error(text) {
    pusher(text, 'error');
    }
    
  }
function log(text) {
     pusher(text, 'log');
}
  
function pusher(text,type) {
    memory.push({
        message: text,
        dateTime: new Date(),
        type,


    });
}


function getRecords(type) {
    
    сonst records = type ? memory.filter((element) => element.type === type) : memory;
     return records.sort((a, b) => b.dateTime - a.dateTime);
      }
      
  
  return {
    warn,
    error,
    log,
    getRecords,
  };
};


// test
// const logger1 = createLogger();
// logger1.error("some error");
// logger1.error("some error 22222");
// logger1.log("some log");
// console.log(logger1.getRecords());
// //
// const logger2 = createLogger();
// logger2.error("unexpected error");
// console.log(logger2.getRecords());


========================

// хостинг механизм порядка записи в лексическое окружение
// всплытие это порядк или почереднеость записи в лексичексоке окружение.
//  происходит это с варами и фанкшн декларещн.

console.log(message);
var message = 'Hoisting is here!';
// underfined


// hoisting var example 2
var a = 55;
console.log(a);

if (a) {
  var a = 1;

  console.log(a);
}

console.log(a);

// 55, 1, 1 
// hoisting var example 3
var a = 77;
console.log(a);

function print() {
  var a = 2;
  console.log(a);
}
print();

console.log(a);


// 77,2,77
// hoisting func example 4
run();

function run() {
  console.log('RUN');
}

stop();
const stop = function () {
  console.log('STOP');
};

// run, error


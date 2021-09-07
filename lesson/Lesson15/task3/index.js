//  input
// output obj with methods warn,error,log,
// create function
// create loggersArray - memory for methods
//

// create function cregetRecords
// input string (type of message warn,error,log)
// return message of that type {message: [saved message],dateTime:Date(),type:[warn or error or log]}
// if no input return all types

// sort all messages by time
// if no messages by the type return empty array

export const createLogger = () => {
  const loggersArray = [];

  function warn(text) {
    loggersArray.push({
      message: text,
      dateTime: new Date(),
      type: "warn",
    });
  }
  function error(text) {
    loggersArray.push({
      message: text,
      dateTime: new Date(),
      type: "error",
    });
  }
  function log(text) {
    loggersArray.push({
      message: text,
      dateTime: new Date(),
      type: "log",
    });
  }

  function getRecords(typeOfMessage = "") {
    if (typeOfMessage !== "") {
      return loggersArray
        .filter((el) => {
          if (el.type === typeOfMessage) {
            return el;
          }
        })
        .sort((a, b) => b.dateTime - a.dateTime);
    }
    return loggersArray.sort((a, b) => b.dateTime - a.dateTime);
  }
  return {
    warn,
    error,
    log,
    getRecords,
  };
};

const logger2 = createLogger();
logger2.warn("some warning");
logger2.warn("some warning2");
logger2.log("some log");
logger2.error("some error message");
logger2.error("some error message2");
logger2.error("some error message3");
console.log("log");
console.log(logger2.getRecords("log"));
console.log("error");
console.log(logger2.getRecords("error"));
console.log("warn");
console.log(logger2.getRecords("warn"));

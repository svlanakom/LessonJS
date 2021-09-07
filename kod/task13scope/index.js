// global

//   лексическое окружение это специальный
//   обьект для хранения переменных внутри памяти
//   джаваскрипта

//   {
//         'enviromentRecord':{
//             'message': 'Test',
//             'weight':55,
//             'createMessenger':function,
//             ....
//         },
//         'outerLexicalEnv': null
//   }
//   // createMessenger
//   {
//         'enviromentRecord':{
//             'message':'just learn it',
//             'sender':'Gromcode',
//              'sendMessage' : func
//             ...
//         },
//         'outerLexicalEnv':global
//   }

//    // run
//   {
//         'enviromentRecord':{
//             // пустой обьект так как нет переменных
//            },
//         'outerLexicalEnv':global
//   }

//     // sendMessage
//   {
//         'enviromentRecord':{
//             // пустой обьект так как нет переменных
//            },
//         'outerLexicalEnv': 'createMessanger'
//   }
// */

const message = "Test";
const weight = 55;

// for (let i = 0; i < 5; i += 1) {
//     console.log(i);
// }

// if (true) {
// const currentDay = "Monday";
//    console.log(message);
// }
// console.log(currentDay);

function run() {
  console.log("RUN");
}

function createMessenger() {
  let message = "Just learn it";
  let sender = "Gromcode";

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}
run();

const messanger1 = createMessenger();
messanger1.sendMessage("Ann");

messanger1.setMessage("Nova Posta");
messanger1.sendMessage("Andrey");

// const messanger2 = createMessenger();
// messanger2.setMessage("Rpzetka");
// messanger2.sendMessage("Denis");
// messanger2.sendMessage("Yevgen");

// const messanger3 = createMessenger();
// messanger3.setMessage("Poshta");
// messanger3.sendMessage("Dan");
// messanger3.setSender("NotGromoCod");
// messanger3.sendMessage("Dan");

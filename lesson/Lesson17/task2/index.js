const callbackPrompt = {
  message: "Tell me your number",
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferredPrompt(ms) {
    setTimeout(() => this.showPrompt(), ms);
  },
};

callbackPrompt.showPrompt();
callbackPrompt.showDeferredPrompt(1000);

// const callbackPrompt = {
//   message: "Tell me something",
//   showSomething() {
//     const something = prompt(this.message);
//     console.log(something);
//   },
//   showDeferredPrompt(ms) {
//     setTimeout(() => this.showSomething(), ms);
//   },
// };
// callbackPrompt.showSomething();
// callbackPrompt.showDeferredPrompt(10000); //

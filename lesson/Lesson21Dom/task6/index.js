function setButton(buttonText) {
  //   const button = document.createElement("button");
  //   button.innerText = buttonText;
  //   document.querySelector("body").append(button);
  const button = `<button>${buttonText}</button>`;
  document.querySelector("body").innerHTML = button;
  // document.querySelector("body").textContent = button;
}

setButton("alla");

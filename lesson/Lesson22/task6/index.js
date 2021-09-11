const butn = document.querySelector(".single-use-btn");

function action() {
  console.log("clicked");
  butn.removeEventListener("click", action);
}

butn.addEventListener("click", action);

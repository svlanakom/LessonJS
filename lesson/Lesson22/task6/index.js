const butn = document.querySelector(".single-use-btn");

function action() {
  console.log("clacked");
  butn.removeEventListener("click", action);
}

butn.addEventListener("click", action);

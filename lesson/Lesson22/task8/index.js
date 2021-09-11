const input = document.querySelector(".text-input");
const action = (event) => {
  console.log(event.target.value);
};

input.addEventListener("change", action);

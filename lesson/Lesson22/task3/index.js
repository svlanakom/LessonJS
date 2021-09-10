const inputItem = document.querySelector(" .text-input");
const act = () => {
  console.log(inputItem.value);
};

inputItem.addEventListener("change", act);

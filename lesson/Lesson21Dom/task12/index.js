export function squaredNumbers() {
  const elementsList = document.querySelectorAll(".number");
  elementsList.forEach((el) => {
    const value = el.getAttribute("data-number");
    el.setAttribute("data-squared-number", value * value);
  });
}
squaredNumbers();

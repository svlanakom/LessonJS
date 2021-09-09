export function finishForm() {
  const form = document.querySelector(".login-form");

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "login");
  form.prepend(input);
  document.querySelector("[name=password]").setAttribute("type", "password");
}

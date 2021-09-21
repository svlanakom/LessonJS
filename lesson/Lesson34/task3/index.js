const baseUrl = "https://61488a44035b3600175b9eb9.mockapi.io/users";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const userNameInput = document.querySelector("#name");

const buttonSend = document.querySelector(".submit-button");
const form = document.querySelector(".login-form");
const errorEl = document.querySelector(".error-text");

const isValid = () => {
  if (
    emailInput.reportValidity() &&
    passwordInput.reportValidity() &&
    userNameInput.reportValidity()
  ) {
    buttonSend.disabled = false;
  }

  errorEl.textContent = "";
};

const sendData = (data) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });

const submitForm = (event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(form));
  sendData(formData)
    .then((response) => response.json())
    .then((data) => {
      alert(JSON.stringify(data));
      form.reset();
      buttonSend.disabled = true;
    })
    .catch(() => {
      errorEl.textContent = "Failed to create user";
    });
};

form.addEventListener("submit", submitForm);
form.addEventListener("input", isValid);

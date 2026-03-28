const form = document.getElementById("form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const successMsg = document.getElementById("successMsg");

function validate() {
  let valid = true;

  if (nameInput.value === "") {
    nameError.textContent = "Name is required";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  if (!emailInput.value.includes("@")) {
    emailError.textContent = "Enter a valid email";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  return valid;
}

nameInput.addEventListener("input", validate);
emailInput.addEventListener("input", validate);
passwordInput.addEventListener("input", validate);

form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (validate()) {
    successMsg.textContent = "Form submitted successfully";
  } else {
    successMsg.textContent = "";
  }
});
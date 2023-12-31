const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email-login");
const passwordInput = document.getElementById("password-login");

function showError(input, message) {
  const errorSpan = document.getElementById(`${input.id}-error`);
  errorSpan.textContent = message;
  errorSpan.style.display = "block";
  input.classList.add("error");
}

function hideError(input) {
  const errorSpan = document.getElementById(`${input.id}-error`);
  errorSpan.textContent = "";
  errorSpan.style.display = "none";
  input.classList.remove("error");
}

function validateEmail() {
  const email = emailInput.value.trim();
  if (email === "") {
    showError(emailInput, "*Email is required");
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    showError(emailInput, "*Email is not valid");
  } else {
    hideError(emailInput);
  }
}

function validatePassword() {
  const password = passwordInput.value.trim();
  if (password === "") {
    showError(passwordInput, "*Password is required");
  } else {
    hideError(passwordInput);
  }
}

function validateForm(event) {
  event.preventDefault();
  validateEmail();
  validatePassword();

  // Jika tidak ada error pada validasi, kirim formulir
  if (
    !emailInput.classList.contains("error") &&
    !passwordInput.classList.contains("error")
  ) {
    sendForm();
  }
}

// Kirim form
function sendForm() {
  loginForm.submit();
}

loginForm.addEventListener("submit", validateForm);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

const signUpForm = document.getElementById("sign-up-form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email-signup");
const passwordInput = document.getElementById("password-signup");

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

function validateUsername() {
  const username = usernameInput.value.trim();
  if (username === "") {
    showError(usernameInput, "*Username is required");
  } else if (username.length < 5) {
    showError(usernameInput, "*Username must be at least 5 characters");
  } else {
    hideError(usernameInput);
  }
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
  } else if (password.length < 8) {
    showError(passwordInput, "*Password must be at least 8 characters");
  } else {
    hideError(passwordInput);
  }
}

function validateForm(event) {
  event.preventDefault();
  validateUsername();
  validateEmail();
  validatePassword();

  // Jika tidak ada error pada validasi, kirim formulir
  if (
    !usernameInput.classList.contains("error") &&
    !emailInput.classList.contains("error") &&
    !passwordInput.classList.contains("error")
  ) {
    sendForm();
  }
}

// Kirim form
function sendForm() {
  signUpForm.submit();
}

signUpForm.addEventListener("submit", validateForm);
usernameInput.addEventListener("input", validateUsername);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

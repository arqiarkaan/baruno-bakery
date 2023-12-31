/*********************************************/
//Validasi Form Message Us menggunakan jQuery
/*********************************************/

const mainForm = $("#message-form");
const nameInput = $("#full-name");
const emailInput = $("#email");
const messageInput = $("#message");
const selectOption = $("#select-where");

function showError(input, message) {
  const errorSpan = $(`#${input.attr("id")}-error`);
  errorSpan.text(message);
  errorSpan.show();
  input.addClass("error");
}

function hideError(input) {
  const errorSpan = $(`#${input.attr("id")}-error`);
  errorSpan.text("");
  errorSpan.hide();
  input.removeClass("error");
}

function validateName() {
  const name = nameInput.val().trim();
  if (name === "") {
    showError(nameInput, "*Name is required");
  } else {
    hideError(nameInput);
  }
}

function validateEmail() {
  const email = emailInput.val().trim();
  if (email === "") {
    showError(emailInput, "*Email is required");
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    showError(emailInput, "*Email is not valid");
  } else {
    hideError(emailInput);
  }
}

function validateMessage() {
  const message = messageInput.val().trim();
  if (message === "") {
    showError(messageInput, "*Please type your message");
  } else {
    hideError(messageInput);
  }
}

function validateSelect() {
  const selectValue = selectOption.val().trim();
  if (selectValue === "") {
    showError(selectOption, "*Please select an option");
  } else {
    hideError(selectOption);
  }
}

function validateForm(event) {
  event.preventDefault();
  validateName();
  validateEmail();
  validateMessage();
  validateSelect();

  // Jika tidak ada error pada validasi, kirim form
  if (
    !nameInput.hasClass("error") &&
    !emailInput.hasClass("error") &&
    !messageInput.hasClass("error") &&
    !selectOption.hasClass("error")
  ) {
    sendForm();
  }
}

// Kirim form
function sendForm() {
  window.location.href = "index.html";
}

mainForm.on("submit", validateForm);
nameInput.on("input", validateName);
emailInput.on("input", validateEmail);
messageInput.on("input", validateMessage);
selectOption.on("change", validateSelect);

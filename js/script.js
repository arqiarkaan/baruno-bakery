/******************************************/
// Sidebar (Tampilan Navbar untuk mobile)
/******************************************/

const menuIconSidebar = document.querySelector("#menu");
const iconNav = document.querySelector(".ham-menu");
const navbarNav = document.querySelector(".main-nav");

// klik menu navbar
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar
document.addEventListener("click", function (e) {
  if (!menuIconSidebar.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    iconNav.setAttribute("name", "menu-outline");
  }
});

// icon menu berubah ketika diklik
let changeIcon = function (icon) {
  if (icon.getAttribute("name") === "menu-outline") {
    icon.setAttribute("name", "close");
  } else {
    icon.setAttribute("name", "menu-outline");
  }
};

/*********************/
// Tombol Back to top
/*********************/

const mybutton = document.getElementById("scroll-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.classList.add("show");
  } else {
    mybutton.classList.remove("show");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Message Us Form Validation jjika menggunakan javascript

// const mainForm = document.getElementById("message-form");
// const nameInput = document.getElementById("full-name");
// const emailInput = document.getElementById("email");
// const messageInput = document.getElementById("message");
// const selectOption = document.getElementById("select-where");

// function showError(input, message) {
//   const errorSpan = document.getElementById(`${input.id}-error`);
//   errorSpan.textContent = message;
//   errorSpan.style.display = "block";
//   input.classList.add("error");
// }

// function hideError(input) {
//   const errorSpan = document.getElementById(`${input.id}-error`);
//   errorSpan.textContent = "";
//   errorSpan.style.display = "none";
//   input.classList.remove("error");
// }

// function validateName() {
//   const name = nameInput.value.trim();
//   if (name === "") {
//     showError(nameInput, "*Name is required");
//   } else {
//     hideError(nameInput);
//   }
// }

// function validateEmail() {
//   const email = emailInput.value.trim();
//   if (email === "") {
//     showError(emailInput, "*Email is required");
//   } else if (!/\S+@\S+\.\S+/.test(email)) {
//     showError(emailInput, "*Email is not valid");
//   } else {
//     hideError(emailInput);
//   }
// }

// function validateMessage() {
//   const message = messageInput.value.trim();
//   if (message === "") {
//     showError(messageInput, "*Please type your message");
//   } else {
//     hideError(messageInput);
//   }
// }

// function validateSelect() {
//   const selectValue = selectOption.value.trim();
//   if (selectValue === "") {
//     showError(selectOption, "*Please select an option");
//   } else {
//     hideError(selectOption);
//   }
// }

// function validateForm(event) {
//   event.preventDefault();
//   validateName();
//   validateEmail();
//   validateMessage();
//   validateSelect();

//   // Jika tidak ada error pada validasi, kirim formulir
//   if (
//     !nameInput.classList.contains("error") &&
//     !emailInput.classList.contains("error") &&
//     !messageInput.classList.contains("error") &&
//     !selectOption.classList.contains("error")
//   ) {
//     sendForm();
//   }
// }

// // Kirim form
// function sendForm() {
//   window.location.href = "index.html";
// }

// mainForm.addEventListener("submit", validateForm);
// nameInput.addEventListener("input", validateName);
// emailInput.addEventListener("input", validateEmail);
// messageInput.addEventListener("input", validateMessage);
// selectOption.addEventListener("change", validateSelect);

const form = document.getElementById("form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");

// FORM SUBMIT
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

// VALIDATION
function validateInputs() {
  const userVal = username.value.trim();
  const emailVal = email.value.trim();
  const passVal = password.value.trim();
  const confirmVal = confirm.value.trim();

  // USERNAME
  if (userVal === "") {
    setError(username, "Username required");
  } else {
    setSuccess(username);
  }

  // EMAIL
  if (!validateEmail(emailVal)) {
    setError(email, "Invalid email");
  } else {
    setSuccess(email);
  }

  // PASSWORD
  if (passVal.length < 6) {
    setError(password, "Min 6 characters");
  } else {
    setSuccess(password);
  }

  // CONFIRM
  if (confirmVal !== passVal || confirmVal === "") {
    setError(confirm, "Passwords not match");
  } else {
    setSuccess(confirm);
  }
}

// ERROR
function setError(input, message) {
  const group = input.parentElement;
  const small = group.querySelector("small");

  group.classList.add("error");
  group.classList.remove("success");

  small.innerText = message;
}

// SUCCESS
function setSuccess(input) {
  const group = input.parentElement;

  group.classList.add("success");
  group.classList.remove("error");
}

// EMAIL VALIDATION
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

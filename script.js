const form = document.getElementById("form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");

// 🔥 REAL-TIME VALIDATION EVENTS

username.addEventListener("input", () => {
  if (username.value.trim() === "") {
    setError(username, "Username required");
  } else {
    setSuccess(username);
  }
});

email.addEventListener("input", () => {
  if (!validateEmail(email.value.trim())) {
    setError(email, "Invalid email");
  } else {
    setSuccess(email);
  }
});

password.addEventListener("input", () => {
  if (password.value.trim().length < 6) {
    setError(password, "Min 6 characters");
  } else {
    setSuccess(password);
  }
});

confirm.addEventListener("input", () => {
  if (confirm.value !== password.value || confirm.value === "") {
    setError(confirm, "Passwords not match");
  } else {
    setSuccess(confirm);
  }
});

// FORM SUBMIT
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateAll();
});

// FINAL VALIDATION CHECK
function validateAll() {
  let valid = true;

  if (username.value.trim() === "") {
    setError(username, "Username required");
    valid = false;
  }

  if (!validateEmail(email.value.trim())) {
    setError(email, "Invalid email");
    valid = false;
  }

  if (password.value.trim().length < 6) {
    setError(password, "Min 6 characters");
    valid = false;
  }

  if (confirm.value !== password.value || confirm.value === "") {
    setError(confirm, "Passwords not match");
    valid = false;
  }

  if (valid) {
    alert("Form Submitted Successfully ✅");
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

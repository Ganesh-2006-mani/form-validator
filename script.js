const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const phoneInput = document.getElementById("phone");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const confirmPasswordValue = confirmPasswordInput.value.trim();
  const phoneValue = phoneInput.value.trim();

  // Name
  if (!/^[A-Za-z]{3,}$/.test(nameValue)) {
    setError(nameInput, "Name must be at least 3 letters");
  } else {
    setSuccess(nameInput);
  }

  // Email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    setError(emailInput, "Email is not valid");
  } else {
    setSuccess(emailInput);
  }

  // Password
  if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(passwordValue)) {
    setError(passwordInput, "Password must be 8 chars, 1 uppercase, 1 number, 1 symbol");
  } else {
    setSuccess(passwordInput);
  }

  // Confirm Password
  if (confirmPasswordValue !== passwordValue || confirmPasswordValue === "") {
    setError(confirmPasswordInput, "Passwords do not match");
  } else {
    setSuccess(confirmPasswordInput);
  }

  // Phone
  if (!/^\d{10}$/.test(phoneValue)) {
    setError(phoneInput, "Phone must be 10 digits");
  } else {
    setSuccess(phoneInput);
  }
}

function setError(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");
  formGroup.className = "form-group error";
  small.innerText = message;
}

function setSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group success";
}

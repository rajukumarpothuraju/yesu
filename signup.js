function validate() {
  let valid = true;

  // USERNAME
  const usernameInput = document.getElementById("username");
  const username = usernameInput.value.trim();
  const nameError = document.getElementById("error");
  const alphaExp = /^[A-Za-z]+$/;

  if (username === "") {
    nameError.textContent = "please enter your name ❌";
    nameError.style.color = "red";
    usernameInput.style.border = "1px solid red";
    usernameInput.style.boxShadow = "0 0 10px red";
    valid = false;
  } else if (!alphaExp.test(username)) {
    nameError.textContent = "name should contain only alphabets ❌";
    nameError.style.color = "red";
    usernameInput.style.border = "1px solid red";
    usernameInput.style.boxShadow = "0 0 10px red";
    valid = false;
  } else {
    nameError.textContent = "✅";
    nameError.style.color = "green";
    usernameInput.style.border = "1px solid green";
    usernameInput.style.boxShadow = "0 0 10px green";
  }

  // PASSWORD
  const passwordInput = document.getElementById("password");
  const password = passwordInput.value.trim();
  const passError = document.getElementById("passError");

  if (password === "") {
    passError.textContent = "please enter your password ❌";
    passError.style.color = "red";
    passwordInput.style.border = "1px solid red";
    passwordInput.style.boxShadow = "0 0 10px red";
    valid = false;
  } else if (password.length < 6) {
    passError.textContent = "password must be at least 6 characters ❌";
    passError.style.color = "red";
    passwordInput.style.border = "1px solid red";
    passwordInput.style.boxShadow = "0 0 10px red";
    valid = false;
  } else {
    passError.textContent = "✅";
    passError.style.color = "green";
    passwordInput.style.border = "1px solid green";
    passwordInput.style.boxShadow = "0 0 10px green";
  }

  // EMAIL
  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();
  const emailError = document.getElementById("EmailError");
  const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    emailError.textContent = "please enter your email ❌";
    emailError.style.color = "red";
    emailInput.style.border = "1px solid red";
    emailInput.style.boxShadow = "0 0 10px red";
    valid = false;
  } else if (!emailExp.test(email)) {
    emailError.textContent = "please enter a valid email ❌";
    emailError.style.color = "red";
    emailInput.style.border = "1px solid red";
    emailInput.style.boxShadow = "0 0 10px red";
    valid = false;
  } else {
    emailError.textContent = "✅";
    emailError.style.color = "green";
    emailInput.style.border = "1px solid green";
    emailInput.style.boxShadow = "0 0 10px green";
  }

  // NUMBER
  const numberInput = document.getElementById("number");
  const number = numberInput.value.trim();
  const numberError = document.getElementById("numberError");

  if (number === "") {
    numberError.textContent = "please enter your number ❌";
    numberError.style.color = "red";
    numberInput.style.border = "1px solid red";
    numberInput.style.boxShadow = "0 0 10px red";
    valid = false;
  } else if (isNaN(number)) {
    numberError.textContent = "number should be numeric ❌";
    numberError.style.color = "red";
    numberInput.style.border = "1px solid red";
    numberInput.style.boxShadow = "0 0 10px red";
    valid = false;
  } else {
    numberError.textContent = "✅";
    numberError.style.color = "green";
    numberInput.style.border = "1px solid green";
    numberInput.style.boxShadow = "0 0 10px green";
  }

  return valid;
}


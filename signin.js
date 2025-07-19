function validatesignin() {
  let validate = true;

  // USERNAME
  let usernameinput = document.getElementById("username");
  let username = usernameinput.value.trim();
  let usernameError = document.getElementById("usernameError");

  if (username === "") {
    usernameError.textContent = "username is mandatory ❌";
    usernameError.style.color = "red";
    usernameinput.style.border = "1px solid red";
    usernameinput.style.boxShadow = "0 0 10px red";
    validate = false;
  } else {
    usernameError.textContent = "✅";
    usernameError.style.color = "green";
    usernameinput.style.border = "1px solid green";
    usernameinput.style.boxShadow = "0 0 10px green";
  }

  // PASSWORD
  let passwordinput = document.getElementById("password");
  let password = passwordinput.value.trim();
  let passwordError = document.getElementById("passError");

  if (password === "") {
    passwordError.textContent = "password is mandatory ❌";
    passwordError.style.color = "red";
    passwordinput.style.border = "1px solid red";
    passwordinput.style.boxShadow = "0 0 10px red";
    validate = false;
  } else {
    passwordError.textContent = "✅";
    passwordError.style.color = "green";
    passwordinput.style.border = "1px solid green";
    passwordinput.style.boxShadow = "0 0 10px green";
  }

  return validate;
}

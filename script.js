function login() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const result = document.getElementById("result");

const isCorrectUsername = usernameInput.value === "admin";
const isCorrectPassword = passwordInput.value === "123";

  if (isCorrectUsername && isCorrectPassword){
    result.innerHTML = "Welcome Danial!";
  } else if (isCorrectUsername) {
    result.innerHTML = "Incorrect password";
  } else {
    result.innerHTML = "Incorrect username/password";
  }
}



//      Below are the other way to code this;
// function login() {
//   const usernameInput = document.getElementById("username");
//   const passwordInput = document.getElementById("password");
//   const result = document.getElementById("result");

// const username = "danial@gmail.com";
// const password = "12345";

//   if (usernameInput.value === username && passwordInput.value === password){
//     result.innerHTML = "Welcome Danial!";
//   } else {
//     result.innerHTML = "Invalid username or password";}

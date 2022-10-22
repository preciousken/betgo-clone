// selecting the DOM
const signupContainer = document.querySelector(".signupContainer");
const signupbtn = document.querySelector(".signupbtn");

// initial effect for DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {
  signupContainer.style.display = "none";
});

signupbtn.addEventListener("click", () => {
  signupContainer.style.display = "";
});

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   axios({
//     method: "get",
//     url: "/send",
//     baseURL: "http://localhost:3000/",
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// });

// selecting the  DOM
const cancel = document.querySelector(".cancel");
const loginContainer = document.querySelector(".logincontainer");
const loginbtn = document.querySelector(".loginbtn");

// DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {
  loginContainer.style.display = "none";
});

cancel.addEventListener("click", () => {
  loginContainer.style.display = "none";
});
loginbtn.addEventListener("click", () => {
  loginContainer.style.display = "";
});

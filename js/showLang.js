// selecting the DOM
const lang = document.querySelectorAll(".lang");
let languagesContainer = document.querySelector(".langMainContainer");
const cancelLang = document.querySelector(".cancelLang");
const closeLang = document.querySelector(".closeLang");

// initial controll for DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {
  languagesContainer.style.display = "none";
});

lang.forEach((e) => {
  e.addEventListener("click", (e) => {
    // console.log("lang clicked");
    languagesContainer.style.display = "";
  });
});
cancelLang.addEventListener("click", () => {
  languagesContainer.style.display = "none";
});

closeLang.addEventListener("click", () => {
  languagesContainer.style.display = "none";
});

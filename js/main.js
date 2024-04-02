const socialsBtn = document.querySelector(".header__main-vert__title");
const socialsList = document.querySelector(".header__main-vert__list");

socialsBtn.addEventListener("click", () => {
  socialsList.classList.toggle("header--list--none");
});

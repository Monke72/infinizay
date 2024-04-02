const socialsBtn = document.querySelector(".header__main-vert__title");
const socialsList = document.querySelector(".header__main-vert__list");

socialsBtn.addEventListener("click", () => {
  socialsList.classList.toggle("header--list--none");
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const menuWrapper = document.querySelector(".menu-wrapper");
const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".close-icon");

menu.addEventListener("click", () => {
  menuWrapper.style.transform = "translateX(0%)";
});
menuClose.addEventListener("click", () => {
  menuWrapper.style.transform = "translateX(100%)";
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});

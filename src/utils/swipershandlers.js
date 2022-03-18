//import "swiper/css";
// import Swiper JS
import Swiper, { Navigation, Pagination } from "swiper";

var swiper = new Swiper(".vehicles__slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  modules: [Navigation, Pagination],
  pagination: {
    el: ".vehicles__slider__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".vehicles__slider__navigation--next",
    prevEl: ".vehicles__slider__navigation--prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//import "swiper/css";
// import Swiper JS
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
Swiper.use([Autoplay]);

const swiperVehicles = new Swiper(".vehicles__slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,

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
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
});

const swiperFeatured = new Swiper(".featured__slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  modules: [Navigation, Pagination],
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".featured__slider__navigation--next",
    prevEl: ".featured__slider__navigation--prev",
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

const swiperReview = new Swiper(".review__slider", {
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
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".review__slider__navigation--next",
    prevEl: ".review__slider__navigation--prev",
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

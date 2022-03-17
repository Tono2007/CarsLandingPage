const menu = document.querySelector(".header-container__icon--menu");
const navbar = document.querySelector(".header-container__navbar");
const header = document.querySelector(".header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  menu.classList.toggle("header-container__icon--menu-active");
  navbar.classList.toggle("header-container__navbar--active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  menu.classList.remove("header-container__icon--menu-active");
  navbar.classList.remove("header-container__navbar--active");

  if (window.scrollY > 0) {
    header.classList.add("header--active");
  } else {
    header.classList.remove("header--active");
  }
};

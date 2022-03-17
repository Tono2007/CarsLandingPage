document.querySelector(".header-container__login-btn").onclick = () => {
  document.querySelector(".modal").classList.toggle("modal--active");
};

document.querySelector(".modal__close-btn").onclick = () => {
  document.querySelector(".modal").classList.remove("modal--active");
};
/* document.querySelector(".modal").onclick = (e) => {
  e.stopPropagation();
  document.querySelector(".modal").classList.remove("modal--active");
}; */

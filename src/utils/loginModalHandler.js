document.querySelector(".header-container__login-btn").onclick = () => {
  document.querySelector(".modal").classList.toggle("modal--active");
};

document.querySelector(".modal__close-btn").onclick = () => {
  console.log("cerrar");
  document.querySelector(".modal").classList.remove("modal--active");
};

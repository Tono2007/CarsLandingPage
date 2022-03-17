document.querySelector(".home").onmousemove = (e) => {
  document.querySelectorAll(".home__parallax").forEach((elm) => {
    let speed = elm.getAttribute("data-speed");

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
  });
};

document.querySelector(".home").onmouseleave = (e) => {
  document.querySelectorAll(".home__parallax").forEach((elm) => {
    elm.style.transform = `translateX(0px) translateY(0px)`;
  });
};

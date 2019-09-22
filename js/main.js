const nav = document.querySelector("#navigation");
const btn = document.querySelector("#burger");
const menu = document.querySelector("#nav");

const handleClick = () => {
  nav.classList.toggle("navigation--active");
};

const handleScroll = e => {
  const position = window.pageYOffset;
  if (position > 10) {
    menu.classList.add("nav--padding");
  } else {
    menu.classList.remove("nav--padding");
  }
};

btn.addEventListener("click", handleClick);
window.addEventListener("scroll", handleScroll);

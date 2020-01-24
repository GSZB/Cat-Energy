var navMenu = document.querySelector(".menu-list");
var navButton = document.querySelector(".header__button");

navMenu.classList.remove("no-js");
navButton.addEventListener("click", function() {
  navMenu.classList.toggle("menu__opened");
});

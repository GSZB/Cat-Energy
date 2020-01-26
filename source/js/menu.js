var navMenu = document.querySelector(".menu-list");
var navButton = document.querySelector(".header__button");
var navButtonClose = document.querySelector(".header__button_close");

navMenu.classList.remove("no-js");

navButton.addEventListener("click", function() {

  navMenu.classList.contains('menu-opened')
  ? navButton.classList.remove("header__button_close")
  : navButton.classList.add("header__button_close");

  navMenu.classList.toggle("menu-opened");

});

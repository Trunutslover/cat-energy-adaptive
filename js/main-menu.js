"use strict";

(function mainMenu() {
    if (document.documentElement.clientWidth < 768) {
        var buttonMenu = document.querySelector(".main-nav__button");
        var menu = document.querySelector(".main-nav__menu");

        buttonMenu.classList.remove("visually-hidden");
        menu.classList.add("main-nav__menu--closed");

        buttonMenu.addEventListener("click", function (evt) {
            evt.preventDefault();

            buttonMenu.classList.toggle("main-nav__button--open");
            menu.classList.toggle("main-nav__menu--closed");
        })
    }
})();
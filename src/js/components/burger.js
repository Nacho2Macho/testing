import { AddOverflowClass } from "../components/hidden-element";
import { RemoveOverflowClass } from "../components/hidden-element";

function burgerMenu() {
    const menu = document.querySelector('.header__burg-menu');
    const burgMenu = document.querySelector(".header__burg");
    const navLinks = document.querySelectorAll(".nav__link");

    function AddActiveClass() {
        if (menu.classList.contains("active")) {
            burgMenu.classList.remove("active");
            menu.classList.remove("active");
            RemoveOverflowClass();
        } else {
            burgMenu.classList.add("active");
            menu.classList.add("active");
            AddOverflowClass();
        }
    }
    burgMenu.addEventListener("click", AddActiveClass);

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            scrollToFooter();
        });
    });

    function scrollToFooter() {
        const footer = document.querySelector(".footer");
        footer.scrollIntoView({ behavior: "smooth" });

        RemoveOverflowClass()

        if (burgMenu.classList.contains("active")) {
            AddActiveClass();
        }
    }

}

document.addEventListener("DOMContentLoaded", burgerMenu);

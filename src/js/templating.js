import menuTemplate from "../Handlebars/menu-item.hbs";
import menu from "../menu.json";

const markup = menuTemplate(menu)

const menuRef = document.querySelector(".js-menu");

menuRef.insertAdjacentHTML("beforeend", markup)
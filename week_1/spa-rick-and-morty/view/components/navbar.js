import { characters as route } from "../../routes.js";
import { goTo } from "../../navigation.js";

const ARROW_LEFT_ICON = "fas fa-angle-left fa-2x";
const ARROW_RIGHT_ICON = "fas fa-angle-right fa-2x";

function navigationArrow(url, classes) {
    const link = document.createElement("a");
    link.style.visibility = url ? "visible" : "hidden";

    if (url) {
        const parameter = url.split("?")[1];
        link.setAttribute("href", `${route.hash}?${parameter}`);
    }

    const element = document.createElement("i");
    element.className = classes;

    link.appendChild(element);

    return link;
}

function searchField() {
    const input = document.createElement("input");
    input.setAttribute("type", "search");
    input.setAttribute("placeholder", "Search name");
    input.setAttribute("autocomplete", "off");

    input.addEventListener("change", function (event) {
        const target = event.target;
        goTo(`${route.hash}?name=${target.value}`);
    });

    return input;
}

function navbar({ previous, next }) {
    const navigation = document.createElement("nav");
    navigation.className = "site-nav";

    navigation.appendChild(navigationArrow(previous, ARROW_LEFT_ICON));
    navigation.appendChild(searchField());
    navigation.appendChild(navigationArrow(next, ARROW_RIGHT_ICON));

    return navigation;
}

export { navbar };

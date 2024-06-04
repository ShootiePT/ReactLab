import { banner } from "../components/banner.js";
import { navbar } from "../components/navbar.js";
import { characterGrid } from "../components/character-grid.js";
import { button } from "../components/button.js";
import { hasParameter } from "../../navigation.js";
import { characters as route } from "../../routes.js";

const TITLE = "Rick and Morty";
const BANNER_IMG = "././assets/sunset.png";

function characterList({ pagination, characters }) {
    const container = document.querySelector("#container");

    container.innerHTML = "";

    container.appendChild(banner(BANNER_IMG, TITLE));
    container.appendChild(navbar(pagination));

    if (hasParameter("name")) {
        container.appendChild(button("btn-dark center", "Clear Search", route.hash));
    }

    container.appendChild(characterGrid(characters));
}

export { characterList };

import { banner } from "../components/banner.js";
import { button } from "../components/button.js";
import { characters as route } from "../../routes.js";

const ERROR_MSG = "NOT FOUND";
const ERROR_IMG = "../../assets/rick-mugshot.png";

function errorMessage() {
    const div = document.createElement("div");
    div.className = "error";

    const errorText = document.createElement("h1");
    errorText.innerText = ERROR_MSG;

    div.appendChild(errorText);
    div.appendChild(button("btn-light", "Back to list", route.hash));

    return div;
}

function error(message) {
    const container = document.querySelector("#container");

    container.innerHTML = "";

    container.appendChild(banner(ERROR_IMG));
    container.appendChild(errorMessage(message));
}

export { error };

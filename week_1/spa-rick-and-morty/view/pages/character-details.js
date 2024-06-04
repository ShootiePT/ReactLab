import { button } from "../components/button.js";
import { banner } from "../components/banner.js";
import { goBack } from "../../navigation.js";

const BANNER_IMG = "././assets/sunset.png";

function paragraph(content) {
    const paragraph = document.createElement("p");
    paragraph.innerText = content;

    return paragraph;
}

function details(species, status, origin, location) {
    console.log(origin);
    console.log(location);
    const details = document.createElement("div");
    details.className = "details";

    details.appendChild(paragraph(`Species: ${species}`));
    details.appendChild(paragraph(`Status: ${status}`));
    details.appendChild(paragraph(`Origin: ${origin.name}`));
    details.appendChild(paragraph(`Last seen on: ${location.name}`));

    const realButton = button("btn-dark", "Go back");
    realButton.addEventListener("click", goBack);

    details.appendChild(realButton);

    return details;
}

function characterDetails({ image, name, species, status, origin, location }) {
    const container = document.querySelector("#container");
    container.innerHTML = "";

    const realBanner = banner(BANNER_IMG, name);
    const bannerImage = document.createElement("img");
    bannerImage.setAttribute("src", image);
    realBanner.appendChild(bannerImage);

    container.appendChild(realBanner);
    container.appendChild(details(species, status, origin, location));
}

export { characterDetails };

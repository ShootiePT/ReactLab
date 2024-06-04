import { details as route } from "../../routes.js";

function background({ src, alt }) {
    const background = document.createElement("img");
    background.setAttribute("src", src);
    background.setAttribute("alt", alt);

    return background;
}

function footer(content) {
    const footer = document.createElement("h3");
    footer.textContent = content;

    return footer;
}

function card({ id, name, image }) {
    const card = document.createElement("li");

    const anchor = document.createElement("a");
    anchor.setAttribute("href", `${route.hash}/${id}`);

    anchor.appendChild(background({ src: image, alt: name }));
    anchor.appendChild(footer(name));

    card.appendChild(anchor);

    return card;
}

function characterGrid(characters) {
    const list = document.createElement("ul");
    list.className = "characters";

    characters.forEach(function (element) {
        list.appendChild(card(element));
    });

    return list;
}

export { characterGrid };

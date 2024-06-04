const LOADING_IMG = "././assets/portal.png";
const LOADING_TXT = "Loading...";

function image() {
    const image = document.createElement("img");
    image.setAttribute("src", LOADING_IMG);
    image.className = "loading-img rotate";

    return image;
}

function loadingMessage() {
    const loadingMessage = document.createElement("h1");
    loadingMessage.className = "loading-message";
    loadingMessage.innerText = LOADING_TXT;

    return loadingMessage;
}

function loading() {
    const container = document.querySelector("#container");

    container.innerHTML = "";

    const errorContainer = document.createElement("div");
    errorContainer.className = "loading";

    errorContainer.appendChild(image());
    errorContainer.appendChild(loadingMessage());

    container.appendChild(errorContainer);
}

export { loading };

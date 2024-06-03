export default function render(message) {
    const container = document.querySelector("#container");
    container.innerHTML = "";

    const header = document.createElement("h1");
    header.innerText = message;

    container.appendChild(header);
}

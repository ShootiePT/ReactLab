function banner(imagePath, content = "") {
    const banner = document.createElement("section");
    banner.className = "banner";
    banner.style.backgroundImage = `url(${imagePath})`;

    const title = document.createElement("h1");
    title.innerText = content;
    title.className = "title";

    banner.appendChild(title);

    return banner;
}

export { banner };

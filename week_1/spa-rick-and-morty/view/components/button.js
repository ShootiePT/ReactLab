function button(classes, content = "", href) {
    const anchor = document.createElement("a");

    if (href) {
        anchor.setAttribute("href", href);
    }

    const button = document.createElement("button");
    button.textContent = content;
    button.className = classes;

    anchor.appendChild(button);

    return anchor;
}

export { button };

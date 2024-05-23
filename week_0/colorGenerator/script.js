const container = document.querySelector('.container');

// Populate HTML
for (let i = 1; i <= 6; i++) {
    const bar = document.createElement('div');
    bar.classList.add('bar', 'animatedBorder');
    bar.id = `bar${i}`;

    const colorText = document.createElement('div');
    colorText.classList.add('colorText', 'upperCase');
    colorText.textContent = '#';

    const colorBtn = document.createElement('button');
    colorBtn.classList.add('colorBtn', 'upperCase');
    colorBtn.textContent = 'Change Color';
    colorBtn.addEventListener('click', () => changeColor(bar));

    bar.appendChild(colorText);
    bar.appendChild(colorBtn);

    container.appendChild(bar);
}

const changeAllBtn = document.createElement('button');
changeAllBtn.id = 'changeAllBtn';
changeAllBtn.classList.add('animatedBorder','upperCase');
changeAllBtn.textContent = 'Change All Bars Color';
changeAllBtn.addEventListener('click', changeAllColors);
document.body.appendChild(changeAllBtn);


// Buttons functions
function changeColor(bar) {
    const color = getRandomColor();
    bar.style.background = `linear-gradient(to bottom, ${color} 0%, ${color} 100%)`;
    bar.querySelector('.colorText').textContent = color;
}


function changeAllColors() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => changeColor(bar));
}


function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

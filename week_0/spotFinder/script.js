const cities = [
    { name: 'Seville', country: 'Spain', image: 'resources/sevilha.jfif' },
    { name: 'Frankfurt', country: 'Germany', image: 'resources/frankfurt.jfif' },
    { name: 'Porto', country: 'Portugal', image: 'resources/porto.jfif' },
    { name: 'Berlin', country: 'Germany', image: 'resources/berlin.jfif' },
    { name: 'Madrid', country: 'Spain', image: 'resources/madrid.jfif' },
    { name: 'Barcelona', country: 'Spain', image: 'resources/barcelona.jfif' },
    { name: 'Coimbra', country: 'Portugal', image: 'resources/coimbra.jfif' },
    { name: 'Cologne', country: 'Germany', image: 'resources/cologne.jfif' },
    { name: 'Lisbon', country: 'Portugal', image: 'resources/lisbon.jfif' },
    { name: 'Munich', country: 'Germany', image: 'resources/munich.jfif' },
    { name: 'Valencia', country: 'Spain', image: 'resources/valencia.jfif' },
    { name: 'Hamburg', country: 'Germany', image: 'resources/hamburg.jfif' }
];

const cardsContainer = document.getElementById('cards-container');
const searchInput = document.getElementById('search-input');
const loadMoreButton = document.getElementById('load-more');

let currentIndex = 0;
const cardsPerPage = 6;

function createCard(city) {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = city.image;
    img.alt = `${city.name}`;

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = city.name;

    const cardCountry = document.createElement('p');
    cardCountry.classList.add('card-country');
    cardCountry.textContent = city.country;

    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardCountry);
    card.appendChild(img);
    card.appendChild(cardContent);

    return card;
}

function displayCards(startIndex) {
    const endIndex = Math.min(startIndex + cardsPerPage, filteredCities.length);
    for (let i = startIndex; i < endIndex; i++) {
        const card = createCard(filteredCities[i]);
        cardsContainer.appendChild(card);
    }
}

let filteredCities = cities;

function filterCards() {
    const query = searchInput.value.toLowerCase();
    filteredCities = cities.filter(city => 
        city.name.toLowerCase().includes(query) || 
        city.country.toLowerCase().includes(query)
    );
    currentIndex = 0;
    cardsContainer.innerHTML = '';
    displayCards(currentIndex);
}

searchInput.addEventListener('input', filterCards);

loadMoreButton.addEventListener('click', () => {
    currentIndex += cardsPerPage;
    displayCards(currentIndex);
});

filterCards();

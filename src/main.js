import Swal from 'sweetalert2';
import './style.css';

const heroImg = document.getElementById('hero-image');
const heroName = document.getElementById('hero-name');
const sortBtn = document.getElementById('sort-button');

const API_URL = 'https://akabab.github.io/superhero-api/api';

const MAX_HEROES = 562;
const MAX_HISTORY = 100;

const idHistory = [];

const randomId = () => {
  let id = Math.floor(Math.random() * MAX_HEROES);
  while (idHistory.includes(id)) {
    id = Math.floor(Math.random() * MAX_HEROES);
  }

  return id;
};

const addToHistory = (id) => {
  idHistory.push(id);

  if (idHistory.length > MAX_HISTORY) idHistory.shift();
};

const fetchHeroData = () => {
  const id = randomId();
  addToHistory(id);

  fetch(`${API_URL}/id/${id}.json`)
    .then((result) => {
      if (!result.ok) throw new Error('Network response was not ok');
      return result.json();
    })
    .then((data) => {
      heroImg.src = data.images.lg;
      heroName.innerHTML = data.name;
      heroName.addEventListener('click', () => {
        Swal.fire({
          title: data.name,
          html: `
            <h3>Full Name</h3>
            <p>${data.biography.fullName}</p>

            <h3>Alter Egos</h3>
            <p>${data.biography.alterEgos}</p>

            <h3>Aliases</h3>
            <p>${data.biography.aliases.join(', ')}</p>

            <h3>Place of Birth</h3>
            <p>${data.biography.placeOfBirth}</p>

            <h3>First Appearance</h3>
            <p>${data.biography.firstAppearance}</p>

            <h3>Publisher</h3>
            <p>${data.biography.publisher}</p>

            <h3>Alignment</h3>
            <p>${data.biography.alignment}</p>
          `,
          icon: 'info',
          confirmButtonText: 'OK',
          background: '#242424',
          color: '#fff',
        });
      });
    })
    .catch((error) => {
      console.error('Hero not found:', error);
      fetchHeroData();
    });
};

sortBtn.addEventListener('click', (event) => {
  event.preventDefault();
  fetchHeroData();
});

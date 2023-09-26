import Swal from 'sweetalert2';
import './style.css';

const heroImg = document.getElementById('hero-image');
const heroName = document.getElementById('hero-name');
const sortBtn = document.getElementById('sort-button');

const API_URL = 'https://akabab.github.io/superhero-api/api';

const MAX_HEROES = 562;

const randomId = () => Math.floor(Math.random() * MAX_HEROES);

sortBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const id = randomId();

  fetch(`${API_URL}/id/${id}.json`)
    .then((result) => result.json())
    .then((data) => {
      heroImg.src = data.images.md;
      heroName.innerHTML = data.name;
    })
    .catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'OK',
    }));
});

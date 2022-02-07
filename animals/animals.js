// console.log('testing');
import { animals } from '../data.js';
import { findById } from '../utils.js';

const name = document.getElementById('animal-name');
const img = document.getElementById('animal-image');
const says = document.getElementById('saying');

const params = new URLSearchParams (window.location.search);
const animal = findById(params.get('id'), animals);


name.textContent = animal.name;
img.src = `../assets/${animal.type}.svg`;
says.textContent = animal.says;
import { buildRecipes } from './recipes.mjs';

fetch('./recipes.json')
    .then(response => response.json())
    .then(data => buildRecipes(data))
    .catch(err => console.error(err));

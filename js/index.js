import { getJson } from './modules/utilities.mjs';
import { buildRecipes } from './modules/templates.mjs';

async function init() {
    const main = document.querySelector('main');
    const recipes = await getJson('../recipes.json');
    main.insertAdjacentHTML('beforeend', buildRecipes(recipes));
}

init();

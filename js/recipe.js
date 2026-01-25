import { getJson } from "./modules/utilities.mjs";
import { populateRecipePage } from "./modules/templates.mjs";

async function init() {
    // Search for parameter 'name' in the url
    const params = new URLSearchParams(window.location.search);
    const recipeName = params.get('name');
    const recipes = await getJson('./recipes.json');

    const recipe = recipes.find(r => r.recipe_name.toLowerCase() === recipeName.toLowerCase());
    console.log(recipe);
    populateRecipePage(recipe);

    const title = document.querySelector('title');
    title.textContent = recipe.recipe_name;
}

init();

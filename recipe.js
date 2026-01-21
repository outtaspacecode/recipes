import { populateRecipePage } from "./templates.mjs";

const params = new URLSearchParams(window.location.search);
const recipeName = params.get('name');

fetch('./recipes.json')
    .then(response => response.json())
    .then(data => {
        const recipe = data.find(r => r.recipe_name.toLowerCase() === recipeName.toLowerCase()); 
        populateRecipePage(recipe);
    })
    .catch(err => console.error(err));

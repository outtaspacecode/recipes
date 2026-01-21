const params = new URLSearchParams(window.location.search);
const recipeName = params.get('recipe');
const recipeIndex = params.get('index')

const main = document.querySelector('main');
fetch('./recipes.json')
    .then(response => response.json())
    .then(data => {
        const recipe = recipeName ? data.find(r => r.recipe_name.toLowerCase() === recipeName.toLowerCase()) : data[recipeIndex]; 
        main.innerHTML = `<h2>${recipe.recipe_name}</h2>`})
    .catch(err => console.error(err));


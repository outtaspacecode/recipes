/*
    Equivalent Measurments
    
    Measure             | Equvalent
    --------------------+----------------------------------
    Under 1/8 teaspoon  | Dash
    3 teaspoons         | 1 tablespoon
    4 tablespoons       | 1/4 cup = 2 ounces
    5 1/3 tablespoons   | 1/3 cup
    8 tablespoons       | 1/2 cup = 4 ounces
    10 2/3 tablespoons  | 2/3 cup
    12 tablespoons      | 3/4 cup = 6 ounces
    16 tablespoons      | 1 cup = 8 ounces
    --------------------+----------------------------------
    1/8 cup             | 1 ounce = 2 tablespoons
    1/4 cup             | 2 ounces = 4 tablespoons
    1/3 cup             | 5 tablespoons plus 1 teaspoon
    1/2 cup             | 4 ounces = 8 tablespoons
    3/4 cup             | 6 ounces = 12 tablespoons
    1 cup               | 8 ounces = 16 tablespoons
    2 cups              | 16 ounces = 1 pint
    4 cups              | 32 ounces = 1 quart
    8 cups              | 64 ounces = 2 quarts = 1/2 gallon
    16 cups             | 128 ounces = 4 quarts = 1 gallon
*/

export function buildRecipes(data) {
    const main = document.querySelector('main');
    data.forEach(recipe => main.insertAdjacentHTML('beforeend', recipeTemplate(recipe)));
}

function recipeTemplate(recipe) {
    return `
        <div class="recipe">
            <h2 class="recipe__name">${recipe.recipe_name}</h2>
            ${checkForNull("h3", "recipe__alt", recipe.alt)}
            ${checkForNull("h3", "recipe__subtitle", recipe.subtitle)}
            ${checkForNull("h3", "recipe__author", recipe.author)}
            ${recipe.subrecipes.map(subrecipe => subrecipeTemplate(subrecipe)).join('')}
            ${recipe.notes ? `
                <h4 class="recipe__notes">Notes</h4>
                <p>${recipe.notes}</p>
            ` : ``}
        </div>
    `;
}

function subrecipeTemplate(subrecipe) {
    return `
        ${checkForNull("h4", "subrecipe__name", subrecipe.name)}
        <h4 class="subrecipe__ingredients">Ingredients</h4>
        <ul>
            ${subrecipe.ingredients.map(ingredient => 
                ingredientTemplate(ingredient)).join('')}
        </ul>
        ${subrecipe.steps ? stepsTemplate(subrecipe.steps) : ``}
    `;
}

function ingredientTemplate(ingredient) {
    return `
        <li>
            ${ingredient.amount ? `${ingredient.amount}` : ``}
            ${ingredient.unit ? `${ingredient.unit}` : ``}
            ${ingredient.notes ? `${ingredient.name}, ${ingredient.notes}` : `${ingredient.name}`}
        </li>
    `;
}

function stepsTemplate(steps) {
    return `
        <h4 class="subrecipe__directions">Directions</h4>
        <ol>
            ${steps.map(step => `
                <li>${step}</li>
            `).join('')}
        </ol>
    `;
}

function checkForNull(tag, class_name, data) {
    return `${data ? `<${tag} class="${class_name}">${data}</h3>` : ``}`;
}

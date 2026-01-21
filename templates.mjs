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
    const param = encodeURIComponent(recipe.recipe_name);
    return `
        <div class="recipe">
            <a href="./recipe.html?name=${param}"><h2 class="recipe__name">${recipe.recipe_name}</h2></a>
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

export function populateRecipePage(recipe) {
    const main = document.querySelector('main');
    main.querySelector('.recipe__name').textContent = recipe.recipe_name;

    recipe.subrecipes.forEach(subrecipe => {
        let iContent = checkForNull("h4", "test", subrecipe.name);
        let dContent = iContent;

        iContent += `<ul>${subrecipe.ingredients.map(i => ingredientTemplate(i)).join('')}</ul>`;

        const ingredients = main.querySelector(".ingredients");
        ingredients.insertAdjacentHTML("beforeend", iContent);

        dContent += `
            <ol>
                ${subrecipe.steps.map(step => `
                    <li>${step}</li>
                `).join('')}
            </ol>
        `;

        const steps = main.querySelector(".steps");
        steps.insertAdjacentHTML("beforeend", dContent);
    });

}

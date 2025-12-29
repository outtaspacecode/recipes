import { recipes } from './recipes.js';

const main = document.querySelector("main");
let content = "";

recipes.sort((a, b) => a.title.localeCompare(b.title));

recipes.forEach(recipe => {
    content += `
        <div class="recipe" >
            <h2>${recipe.title}</h2>
            ${recipe.alt ? `<h3>${recipe.alt}</h3>` : ``}
            ${recipe.subtitle ? `<h3>${recipe.subtitle}</h3>` : ``}
            ${recipe.author ? `<h3>${recipe.author}</h3>` : ``}
            <h3>Ingredients</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => {
                    return `<li>${ingredient}</li>`;
                }).join('')}
            </ul>
            ${recipe.directions? `
                <h3>Directions</h3>
                <ol>
                    ${recipe.directions.map(direction => {
                        return `<li>${direction}</li>`;
                    }).join('')}
                </ol>
            ` : ``}
        </div>
    `;
});

main.innerHTML += content;

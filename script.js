import { recipes } from './recipes.mjs';

const main = document.querySelector("main");
let content = "";

recipes.sort((a, b) => a.title.localeCompare(b.title));

recipes.forEach(recipe => {
    content += `
        <div class="recipe">
            <h2>${recipe.title}</h2>
            ${recipe.alt ? `<h3>${recipe.alt}</h3>` : ``}
            ${recipe.subtitle ? `<h3>${recipe.subtitle}</h3>` : ``}
            ${recipe.author ? `<h3>${recipe.author}</h3>` : ``}
            ${recipe.subrecipes.map(subrecipe => `
                ${subrecipe.title ? `<h4>${subrecipe.title}</h4` : ``}
                <h4>Ingredients</h4>
                <ul>
                    ${subrecipe.ingredients.map(ingredient => `
                        <li>${ingredient}</li>
                    `).join('')}
                </ul>
                ${subrecipe.directions ? `
                    <h4>Directions</h4>
                    <ol>
                        ${subrecipe.directions.map(direction => `
                            <li>${direction}</li>
                        `).join('')}
                    </ol>
                ` : ``}
            `).join('')}
            ${recipe.notes ? `
                <h4>Notes</h4>
                <p>${recipe.notes}</p>
            ` : ``}
        </div>
    `;
});

main.innerHTML += content;

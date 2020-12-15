import get from "./getElement.js";
import { hideLoader } from "./toggleLoading.js";

function displayDrinks({ drinks }) {
    const section = get(".--section-centered");
    const title = get(".title");
    console.log(drinks);

    if (!drinks) {
        // hide loading
        hideLoader();
        title.textContent = "Sorry, no drinks matches your search";
        section.innerHTML = null;
        return;
    }

    const newDrinks = drinks
        .map((drink) => {
            const { idDrink: id, strDrinkThumb: image, strDrink: name } = drink;
            return `<a href="./drink.html">
                    <article class="cocktail" data-id="${id}">
                        <img src="${image}" alt="${name}" />
                        <h3>${name}</h3>
                    </article>
                </a>`;
        })
        .join("");

    // hide loading
    hideLoader();
    title.textContent = "";
    section.innerHTML = newDrinks;
    return section;
}

export default displayDrinks;

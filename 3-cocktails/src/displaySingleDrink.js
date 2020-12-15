import get from "./getElement.js";
import { hideLoader } from "./toggleLoading.js";

function displaySingleDrink(drink) {
    const { strDrink: name, strDrinkThumb: img, strInstructions: desc } = drink;
    let ingredients = [];

    for (const prop in drink) {
        if (prop.includes("strIngredient")) {
            ingredients.push(drink[prop]);
        }
    }

    const drinkImg = get(".drink-img");
    const drinkName = get(".drink-name");
    const drinkDesc = get(".drink-desc");
    const drinkIngredients = get(".drink-ingredients");

    document.title = name;
    hideLoader();

    drinkImg.src = img;
    drinkName.textContent = name;
    drinkDesc.textContent = desc;

    drinkIngredients.innerHTML = ingredients
        .filter((item) => item)
        .map((item) => `<li><i class='far fa-check-square'></i>${item}</li>`)
        .join("");
}

export default displaySingleDrink;

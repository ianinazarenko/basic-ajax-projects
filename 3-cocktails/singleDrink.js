import fetchDrinks from "./src/fetchDrinks.js";
import displaySingleDrink from "./src/displaySingleDrink.js";

document.addEventListener("DOMContentLoaded", async () => {
    const id = localStorage.getItem("id");
    if (!id) {
        window.location.replace("./index.html");
    } else {
        const { drinks } = await fetchDrinks(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        console.log(drinks[0]);
        displaySingleDrink(drinks[0]);
    }
});

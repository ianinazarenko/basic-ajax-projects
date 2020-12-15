import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";

const showDrinks = async (url) => {
    // fetch
    const data = await fetchDrinks(url);

    // display cocktails
    const section = await displayDrinks(data);
    console.log(section);
    if (section) {
        setDrink(section);
    }
};

export default showDrinks;

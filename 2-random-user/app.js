import get from "./utils/getElement.js";
import getUser from "./utils/fetchUser.js";
import displayUser from "./utils/displayUser.js";

const randomBtn = get(".random-btn ");

const showUser = () => {
    console.log("hello world");
    getUser().then((person) => displayUser(person));
};

document.addEventListener("DOMContentLoaded", showUser);
randomBtn.addEventListener("click", showUser);

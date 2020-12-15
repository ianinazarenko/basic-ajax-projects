import get from "./getElement.js";

const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const btns = [...document.querySelectorAll(".icon")];

function displayUser(person) {
    img.src = person.image;
    title.textContent = `Mi name is`;
    value.textContent = person.name;
    btns.forEach((btn) => btn.classList.remove("active"));
    btns[0].classList.add("active");
    btns.forEach((btn) => {
        const label = btn.dataset.label;
        btn.addEventListener("click", () => {
            value.textContent = person[label];
            title.textContent = `My ${label} is`;
            btns.forEach((btn) => btn.classList.remove("active"));
            btn.classList.add("active");
        });
    });
}

export default displayUser;

const url = "https://api.chucknorris.io/jokes/random";
const btn = document.querySelector(".btn");
const content = document.querySelector(".joke-text");
const img = document.querySelector("img");

btn.addEventListener("click", async () => {
    try {
        const data = await fetch(url);
        const response = await data.json();
        displayData(response);
    } catch (error) {
        console.log(error);
    }
});

function displayData({ value: joke }) {
    img.classList.add("img-shake");
    const interval = Math.floor(Math.random() * 1000);
    console.log(interval);
    setTimeout(() => img.classList.remove("img-shake"), interval);
    content.textContent = joke;
}

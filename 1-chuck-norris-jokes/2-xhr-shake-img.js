const url = "https://api.chucknorris.io/jokes/random";
const btn = document.querySelector(".btn");
const content = document.querySelector(".joke-text");
const img = document.querySelector("img");

btn.addEventListener("click", () => {
    getData(url);
});

function getData(url) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr.status === 200) {
            img.classList.add("img-shake");
            const interval = Math.floor(Math.random() * 1000);
            console.log(interval);
            setTimeout(() => img.classList.remove("img-shake"), interval);
            const { value: joke } = JSON.parse(xhr.responseText);
            content.textContent = joke;
        } else {
            console.log({
                status: xhr.status,
                text: xhr.statusText,
            });
        }
    };

    xhr.open("GET", url, true);
    xhr.send();
}

const url = "https://api.chucknorris.io/jokes/random";
const btn = document.querySelector(".btn");
const content = document.querySelector(".joke-text");
const img = document.querySelector("img");

btn.addEventListener("click", () => {
    window
        .fetch(url) // readyState === 2 SENT (headers are avaliable) -> LOADING... 200
        .then((response) => {
            console.log(response);
            return response.json();
        }) // when LOAD, parse into JSON
        .then((data) => displayData(data));
});

// function getData(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();

//         xhr.open("GET", url, true);
//         xhr.send();
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState !== 4) return;
//             if (xhr.status === 200) {
//                 resolve(xhr.responseText);
//             } else {
//                 reject({
//                     status: xhr.status,
//                     text: xhr.statusText,
//                 });
//             }
//         };
//     });
// }

function displayData({ value: joke }) {
    img.classList.add("img-shake");
    const interval = Math.floor(Math.random() * 1000);
    console.log(interval);
    setTimeout(() => img.classList.remove("img-shake"), interval);
    // const { value: joke } = responseText;
    content.textContent = joke;
}

const url = "https://api.chucknorris.io/jokes/random";
const btn = document.querySelector(".btn");
const content = document.querySelector(".joke-text");

btn.addEventListener("click", () => {
    getData(url);
});

function getData(url) {
    const xhr = new XMLHttpRequest();
    // readyState === 0;

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 1) {
            console.log(`xhr ready state is: ${xhr.readyState} OPENED`);
        } else if (xhr.readyState === 2) {
            console.log(`xhr ready state is: ${xhr.readyState} SENT`);
        } else if (xhr.readyState === 3) {
            console.log(`xhr ready state is: ${xhr.readyState} LOADING`);
        }

        if (xhr.readyState !== 4) return;

        // status === 200 LOADING & DONE (after OPENED)
        if (xhr.status === 200) {
            console.log(`xhr ready state is: ${xhr.readyState} DONE`);
            const { value: joke } = JSON.parse(xhr.responseText);
            content.textContent = joke;
        } else {
            console.log({
                status: xhr.status,
                text: xhr.statusText,
            });
        }
    };

    console.log(content);

    xhr.open("GET", url, true); //readyState === 1 OPENED
    xhr.send(); // Asyncronн starts here - Scip it and do when you're free readyState === 2 SENT

    // console.log("hello");
}

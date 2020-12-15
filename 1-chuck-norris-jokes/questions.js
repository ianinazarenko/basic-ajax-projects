// Hello, John,
// You said (on ) that we can't call .then() after we called .then((response) => displayData(response)), because it doesn't return promise, but I tried and everything worked. May be I didn't undestand you correctly. But the following code works just perfectly. Could you, please, check?

btn.addEventListener("click", () => {
    getData(url)
        .then((response) => displayData(response))
        .catch((err) => console.log(err))
        .then(() => console.log(1));
});

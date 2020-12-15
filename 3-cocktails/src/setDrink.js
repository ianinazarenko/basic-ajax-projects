const setDrink = (section) => {
    section.addEventListener("click", function (e) {
        // e.preventDefault();
        console.log(e.target.parentElement.dataset.id);
        const id = e.target.parentElement.dataset.id;
        localStorage.setItem("id", id);
        sessionStorage.setItem("id", id);
    });
};

export default setDrink;

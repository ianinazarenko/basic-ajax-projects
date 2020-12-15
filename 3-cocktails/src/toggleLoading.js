import get from "./getElement.js";

const loader = get(".loader");

export const showLoader = () => {
    loader.classList.remove("hide-loader");
};

export const hideLoader = () => {
    loader.classList.add("hide-loader");
};

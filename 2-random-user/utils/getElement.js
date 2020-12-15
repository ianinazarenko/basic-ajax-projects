const getElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`Element hasn't been selected. No such element`);
};

export default getElement;

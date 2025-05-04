import faker from "faker";

const mount = (el) => {
    const productContainer = document.createElement('div');
    productContainer.setAttribute('style', 'display: flex; flex-wrap: wrap;');

    for (let i = 0; i < 20; i++) {
        const product = document.createElement('div');
        product.setAttribute('style', 'width: 200px; padding: 10px; margin: 10px;');
        product.innerHTML = `
            <h3>${faker.commerce.productName()}</h3>
            <p>${faker.commerce.price()}</p>
        `;
        productContainer.appendChild(product);
    }

    el.appendChild(productContainer);
}


if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');
    if (el) {
        mount(el);
    }
}

export { mount };

import faker from 'faker';

const mount = (el) => {
    el.innerHTML = `
        <div>
            <h1>Cart</h1>
            <h2>${faker.commerce.productName()}</h2>
            <h2>${faker.random.number()}</h2>
        </div>
    `;
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart');
    if (el) {
        mount(el);
    }
}

export { mount };

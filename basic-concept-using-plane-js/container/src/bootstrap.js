import { mount as mountProducts } from 'products/ProductsList';
import { mount as mountCart } from 'cart/Cart';

const productContainer = document.getElementById('product-dev-container');
const cartContainer = document.getElementById('cart-dev-container');

mountProducts(productContainer);
mountCart(cartContainer);

console.log('Container is running...');

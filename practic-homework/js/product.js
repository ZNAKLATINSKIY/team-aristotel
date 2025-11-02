import { getProductById } from './api.js';
import { Product, Cart } from './models.js';

const mainBlock = document.querySelector('.main__block');

const cart = new Cart();

export async function renderProduct(id) {
    const productData = await getProductById(id);
    if (!productData) return;

    const product = new Product(
        productData.id,
        productData.title,
        productData.price,
        productData.description,
        productData.image,
        productData.category
    );

    // выводим товар
    mainBlock.innerHTML = `
        <div class="product-card">
            <img class="product-card__img" src="${product.image}" alt="${product.title}">
            <h2 class="product-card__title">${product.title}</h2>
            <p class="product-card__detailse">${product.description}</p>
            <p class="product-card__price">$${product.price}</p>
            <button class="product-card__btn main__button" id="addToCartBtn" data-id="${product.id}">
                Добавить в корзину
            </button>
        </div>
    `;

    const addBtn = document.querySelector('#addToCartBtn');
    addBtn.addEventListener('click', () => {
        cart.addProduct(product);
    });
}

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (id) {
    renderProduct(id);
} else {
    mainBlock.innerHTML = '<p>Товар не найден.</p>';
}

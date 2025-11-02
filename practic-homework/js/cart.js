import { Cart } from './models.js';

const cart = new Cart();
const container = document.querySelector('.cart-container');
const totalSpan = document.querySelector('.cart__price-all');
const cartCount = document.querySelector('.header__cart-count');

function renderCart() {
    if (cart.items.length === 0) {
        container.innerHTML = '<p>Корзина пуста.</p>';
        totalSpan.textContent = '0';
        updateCartCount();
        return;
    }

    container.innerHTML = cart.items.map(item => `
       
        <div class="product-card">
                <img class="product-card__img" src="${item.product.image}" width="80">
                <h3 class="product-card__title">${item.product.title}</h3>
                <p class="product-card__detailse">Количество: ${item.quantity}</p>
                <p class="product-card__detailse">Цена: $${item.product.price}</p>
                <button class="main__button remove-btn" data-id="${item.product.id}">Удалить</button>
               
            </div>
    `).join('');

    container.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            removeFromCart(id);
        });
    });

    totalSpan.textContent = `${calculateTotal().toFixed(2)}$`;

    updateCartCount();
}

function removeFromCart(id) {
    cart.removeProduct(id);
    renderCart();
}

function updateCartCount() {
    const count = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = count;
}

function calculateTotal() {
    return cart.getTotal();
}

renderCart();

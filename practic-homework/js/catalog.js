import { getProducts } from './api.js';
import { Product, Cart } from './models.js';

const mainBlock = document.querySelector('.main__block');
const cart = new Cart();

let allProducts = []; 

function renderProductCard(product) {
    return product.renderCard();
}

async function renderCatalog() {
    try {
        const data = await getProducts();
        allProducts = data.map(item => new Product(
            item.id, item.title, item.price, item.description, item.image, item.category
        ));

        renderProducts(allProducts); 
        setupCategoryFilter();
        setupSearch();
        setupSort();
    } catch (error) {
        console.error('Ошибка при загрузке товаров:', error);
        mainBlock.innerHTML = '<p>Не удалось загрузить товары. Попробуйте позже.</p>';
    }
}

function renderProducts(products) {
    mainBlock.innerHTML = products.map(renderProductCard).join('');

    mainBlock.querySelectorAll('.product-card__btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            const product = allProducts.find(p => p.id === id);
            if (product) {
                cart.addProduct(product);
                alert(`Товар "${product.title}" добавлен в корзину!`);
            }
        });
    });

    mainBlock.querySelectorAll('.product-card__details').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            window.location.href = `product.html?id=${id}`;
        });
    });
}

function setupCategoryFilter() {
    const categorySelect = document.getElementById('categoryFilter');
    if (!categorySelect) return;

    categorySelect.addEventListener('change', () => {
        const selected = categorySelect.value;
        const filtered = selected === 'all'
            ? allProducts
            : allProducts.filter(p => p.category === selected);
        renderProducts(filtered);
    });
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
        const filtered = allProducts.filter(p =>
            p.title.toLowerCase().includes(query)
        );
        renderProducts(filtered);
    });
}

function setupSort() {
    const sortSelect = document.getElementById('sortSelect');
    if (!sortSelect) return;

    sortSelect.addEventListener('change', () => {
        let sorted = [...allProducts];
        switch (sortSelect.value) {
            case 'price-asc':
                sorted.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                sorted.sort((a, b) => b.price - a.price);
                break;
            case 'title-asc':
                sorted.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'title-desc':
                sorted.sort((a, b) => b.title.localeCompare(a.title));
                break;
        }
        renderProducts(sorted);
    });
}

renderCatalog();

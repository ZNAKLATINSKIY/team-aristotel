const BASE_URL = 'https://fakestoreapi.com';

export async function getProducts() {
    const res = await fetch(`${BASE_URL}/products`);
    return await res.json();
}

export async function getProductById(id) {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    return await res.json();
}

export async function getCategories() {
    const res = await fetch(`${BASE_URL}/products/categories`);
    return await res.json();
}

export async function getProductsByCategory(category) {
    const res = await fetch(`${BASE_URL}/products/category/${encodeURIComponent(category)}`);
    return await res.json();
}

const API_URL = "https://fakestoreapi.com";

async function getProducts() {
    const result = await fetch(`${API_URL}/products`);
    return result.json();
}

async function getProductById(id) {
  const result = await fetch(`${API_URL}/products/${id}`);
  return result.json();
}


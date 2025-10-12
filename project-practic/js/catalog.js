document.addEventListener("DOMContentLoaded", async() => {
    const products = await getProducts();
    const containerCatalog = document.getElementById("catalog");

    for (let i = 0; i < products.length; i++) {
        const temp = products[i];
        const card = document.createElement('div');
        card.className = "card";
        card.innerHTML = `
        <img src="${temp.image}"> 
        <h3>${temp.title}</h3>
        <p>${temp.price}$</p>
        <a class="product__but" href="product.html?id=${temp.id}">Подробнее</a>
        `;
        containerCatalog.appendChild(card);
    };
});
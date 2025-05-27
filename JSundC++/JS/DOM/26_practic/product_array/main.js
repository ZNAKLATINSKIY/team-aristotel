const productInput = document.getElementById('productInput');
const productList = document.getElementById('productList');
const addProductButton = document.getElementById('addProductButton');
const mySet = new Set();

function addProduct() {
    const productName = productInput.value.trim();
    if (productName === '') {
        alert('Введите название продукта.');
        return;
    }
    if (mySet.has(productName)) {
        alert('Этот продукт уже добавлен.');
        return;
    }

    mySet.add(productName);
    const listItem = document.createElement('li');
    listItem.textContent = productName;
    productList.appendChild(listItem);

    productInput.value = '';
}

addProductButton.addEventListener('click', addProduct);
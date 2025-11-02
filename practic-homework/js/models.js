
export class Product {
    constructor(id, title, price, description, image, category) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
        this.category = category;
    }

    renderCard() {
        return `
            <div class="product-card">
                <img src="${this.image}" alt="${this.title}" class="product-card__img">
                <h3 class="product-card__title">${this.title}</h3>
                <p class="product-card__price">${this.price} $</p>
                <div class="product-card__buttons">
                    <button class="product-card__btn" data-id="${this.id}">Добавить в корзину</button>
                    <button class="product-card__details" data-id="${this.id}">Подробнее</button>
                </div>
            </div>
        `;
    }
}


export class CartItem {
    constructor(product, quantity = 1) {
        this.product = product; 
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

export class Cart {
    constructor() {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];

        this.items = savedCart.map(item => new CartItem(new Product(
            item.product.id,
            item.product.title,
            item.product.price,
            item.product.description,
            item.product.image,
            item.product.category
        ), item.quantity));
    }

    addProduct(product) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.items.push(new CartItem(product));
        }
        this.save();
    }

    removeProduct(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
        this.save();
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + item.getTotalPrice(), 0);
    }

    clear() {
        this.items = [];
        this.save();
    }

    save() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }
}
export class User {
    constructor(name, email, password, registered = false, authorization = false) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.registered = registered;
        this.authorization = authorization;
    }

    checkPassword(password) {
        return this.password === password;
    }
}


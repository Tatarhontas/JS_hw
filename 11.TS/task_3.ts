// 1. Создайте корзину в интернет магазине! 
//     Создайте объект shoppingCart и его интерфейс!:
//       items (array of products), each product should have:
//         id (number)
//         name (string)
//         price (number)
//         quantity (number)
//     Добавьте методы к этому объекту:

//     addItem(item) - Adds a new item to the cart.
//     removeItem(id) - Removes an item from the cart by its id.
//     getTotalPrice() - Returns the total price of the items in the cart.
//     checkout() - Empties the cart and returns the total price.

//     Пример:
//     interface IShoppingCart { //implement }
//     const cart: IShippingCart = {
//     items: [
//         { id: 1, name: "Laptop", price: 1000, quantity: 1 },
//         { id: 2, name: "Phone", price: 500, quantity: 2 }
//     ],
//     addItem: function(item) {
//         //implement
//     },
//     removeItem: function(id) {
//         //implement
//     },
//     getTotalPrice: function() {
//         //implement
//     },
//     checkout: function() {
//         //implement
//     }
// };


interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;    // кол-во
}

interface IShoppingCart {
    items: Product[];
    addItem(item: Product): void;
    removeItem(id: number): void;
    getTotalPrice(): number;
    checkout(): number;
}

const shoppingCart: IShoppingCart = {
    items: [],
    addItem(item: Product) {
        const newItem = this.items.find(i => i.id === item.id);
        if (newItem) {
            newItem.quantity += item.quantity;
        } else {
            this.items.push(item);
        }
    },
    removeItem(id: number) {
        this.items = this.items.filter(el => el.id !== id);    // оставлю только те, что не совпадают
    },
    getTotalPrice() {
        return this.items.reduce((total, el) => total + el.price * el.quantity, 0);
    },
    checkout() {
        const totalPrice = this.getTotalPrice();
        this.items = [];
        return totalPrice;
    }
};

// проверка:
shoppingCart.addItem({ id: 1, name: "Laptop", price: 1000, quantity: 1 });
shoppingCart.addItem({ id: 2, name: "Phone", price: 500, quantity: 2 });
console.log(shoppingCart.getTotalPrice()); 
shoppingCart.removeItem(2);
console.log(shoppingCart.getTotalPrice()); 
console.log(shoppingCart.checkout()); 
console.log(shoppingCart.items); 

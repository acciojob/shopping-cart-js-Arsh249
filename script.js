//your code here
window.onload = function() {
    displayCartItems();
};

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

function displayCartItems() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        cartItems.appendChild(li);
    });
}

function clearCart() {
    localStorage.removeItem('cart');
    displayCartItems();
}
